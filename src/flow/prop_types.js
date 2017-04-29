export type MakePressableProps = {
    onPress: () => void,
};

export type BusyLoaderProps = {
    isBusy: boolean,
};

export type ScreenRouterProps = {
    screenName: 'HOME'| 'BROWSE',
};

export type IndexComponentProps = {
    screenName: string,
};

export type HomeProps = {
    screen: { name: string },
    setScreen: () => void,
    uuid: string,
};

export type AppProps = {

};