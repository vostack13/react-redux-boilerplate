export const handleAction = (handlers: any, initialValue: any) => (state: any = initialValue, action: any) => {
    return handlers[action.type] !== undefined
        ? handlers[action.type](action, state)
        : state;
};
