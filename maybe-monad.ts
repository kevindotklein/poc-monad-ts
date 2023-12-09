interface Maybe<T> {
    value: T;
}

const some = <T,>(x: T): Maybe<T> => {
    return {
        value: x
    }
}

const run = <T,>(
    input: Maybe<T> | null, transform: (_: T) => Maybe<T>
    ): Maybe<T> | undefined => {

        if(input == null) {
            return;
        }

        return transform(input.value);
    }