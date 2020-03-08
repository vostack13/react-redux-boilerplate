import React from 'react';

type TValidatorOption = 'required' | 'notEmpty' | 'email' | string;
interface IInitial {
    [key: string]: {value: any, validators: Array<TValidatorOption>};
}

interface IValid {
    [idx: string]: (value: string) => string;
}

const validator = (data: string, skipOptions: Array<TValidatorOption>, ...options: Array<TValidatorOption>) => {
    const errorTypes: IValid = {
        required: (value: string) => (!!value ? '' : 'Поле не должно быть пустым'),

        email: (value: string) => {
            if (!!value) {
                const regexp = new RegExp(
                    "(?=[a-z0-9@.!#$%&'*+/=?^_`{|}~-]{6,254})(?=[a-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@)[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?=[a-z0-9-]{1,63}.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+(?=[a-z0-9-]{1,63})[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
                    'gm'
                );
                if (!!value && !regexp.test(value)) return 'Некорректый e-mail';
            }

            return '';
        },
    };

    return options.reduce(
        (acc: Array<string>, key: TValidatorOption) =>
            !skipOptions.includes(key) && !!errorTypes[key](data)
                ? [...acc, errorTypes[key](data)]
                : [...acc],
        []
    )[0] || '';
};

export function useFormState(initial: IInitial) {
    const [formControls, setFormControls] = React.useState(
        Object.entries(initial).reduce((acc: any, [key, value]) => ({
            ...acc,
            [key]: value.value,
        }), {})
    );

    const [formErrors, setFormErrors] = React.useState(
        Object.keys(initial).reduce((acc: any, key) => ({...acc, [key]: ''}), {})
    );

    const [isChangeForm, setIsChangeForm] = React.useState(false);

    const setRef = React.useCallback((ref: any) => {
        ref.addEventListener('blur', function(event: any) {
            changeError(event.target.name, event.target.value, ['required']);
        }, true);
    }, []);

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormControls({
            ...formControls,
            [event.target.name]: event.target.value,
        });
    };

    const changeError = (name: string, value: string, skipValidOptions: Array<TValidatorOption>) => {
        const validationValue = validator(
            value,
            skipValidOptions,
            ...initial[name].validators
        );

        setFormErrors((prev: any) => ({
            ...prev,
            [name]: validationValue,
        }));
    };

    const validationForm = () => {
        const errors = Object.entries(initial).reduce((acc: any, [key, value]) => ({
            ...acc,
            [key]: validator(formControls[key], [], ...value.validators),
        }), {});

        setFormErrors(errors);

        return !Object.values(errors).some(value => !!value);
    };

    return {
        formControls,
        formErrors,
        changeValue,
        validationForm,
        setRef,
        isChangeForm,
    };
}
