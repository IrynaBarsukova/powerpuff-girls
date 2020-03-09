export default function MockStore(data) {
    this.data = data;

    return {
        dispatch: () => {},

        subscribe: () => {},

        getState: () => this.data,
    };
};
