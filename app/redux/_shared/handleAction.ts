export const handleAction: any = (initialValue: any, handlers: any) => (state: any = initialValue, action: any) => {
    return handlers[action.type] !== undefined
        ? handlers[action.type](action, state)
        : state;
};
