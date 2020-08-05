export class SingletonEx{
    private static singleton: any = null;

    private constructor() {}

    public static getInstance <T> (t: {new(): T}): T {
        if (!SingletonEx.singleton) {
            SingletonEx.singleton = new t();
        }

        return SingletonEx.singleton;
    }
}