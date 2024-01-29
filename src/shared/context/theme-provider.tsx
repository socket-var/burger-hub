import { ConfigProvider, theme } from "antd";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

export const ThemeContext = createContext<{
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;
}>({
  isDarkTheme: false,
  setIsDarkTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      <ConfigProvider
        theme={{
          algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
          components: {
            Layout: isDarkTheme
              ? {}
              : {
                  headerBg: "#f0f0f0",
                },
          },
        }}
      >
        {children}{" "}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
