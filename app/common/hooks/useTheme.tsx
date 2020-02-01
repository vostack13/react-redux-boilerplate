import {useTheme} from 'emotion-theming';
import {ITheme} from 'app/common/theme';

const useAppTheme = () => {
    const t = useTheme<ITheme>();

    return () => t;
};

export default useAppTheme;
