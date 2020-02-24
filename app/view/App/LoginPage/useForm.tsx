import React from 'react';

type TValidatorOption = 'required' | 'notEmpty' | 'email' | string;

interface IValid {
    [idx: string]: (value: string) => string;
}

const validator = (data: string, ...options: Array<TValidatorOption>) => {
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
            !!errorTypes[key](data) ? [...acc, errorTypes[key](data)] : [...acc],
        []
    )[0] || '';

    // .length === 0
};

export function useFormState<T>(initial: T) {
    const [formControls, setFormControls] = React.useState(initial);

    const [formErrors, setFormErrors] = React.useState(
        Object.keys(initial).reduce((acc: any, key) => ({...acc, [key]: ''}), {})
    );

    // const [formState, setFormState] = React.useState(
    //     Object.entries(formControls).reduce((acc: any, [key, value]) => ({
    //         ...acc,
    //         [key]: {value, errorText: formErrors[key] ? formErrors[key] : ''},
    //     }), {})
    // );

    const [isValid, setIsValid] = React.useState(false);

    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormControls({
            ...formControls,
            [event.target.name]: event.target.value,
        });
    };

    console.log('formErrors', formErrors);

    const onBlur = (event: any) => {
        console.log('blur: ', event.target.name, ' | ', event.target.value);
        console.log('validator: ', validator(event.target.value, 'email', 'required'));

        setFormErrors({
            ...formErrors,
            [event.target.name]: validator(event.target.value, 'email', 'required'),
        });
    };

    React.useEffect(() => {
        // Object.entries(initial).some(([key, value]) => ();
    }, [formErrors]);

    return {
        formControls,
        formErrors,
        changeValue,
        onBlur,

        // formIsValid,
        // formState,
    };
}
