import resolveConfig from 'tailwindcss/resolveConfig';
import configs from './tailwind.config';

const tailwindConfigData = resolveConfig(configs as any);

const tailwindColors = tailwindConfigData?.theme?.colors;
const tailwindScreens = tailwindConfigData?.theme?.screens;

export type TColors = keyof typeof tailwindColors;

export { tailwindConfigData, tailwindColors, tailwindScreens };
