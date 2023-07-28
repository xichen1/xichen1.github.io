import React, {useContext} from "react";
import {
    Highlight,
    themes
} from "prism-react-renderer";
import {ThemeContext} from "@src/components/ThemeContextWrapper";

const PrismSyntaxHighlight = ({ children, className }: {children: string, className: string}) => {
    const language = className.replace(/language-/gm, '');
    // retrieve theme state
    const themeState = useContext(ThemeContext);
    const theme = themeState === 'light' ? themes.jettwaveLight : themes.duotoneDark;

    return (
        <Highlight code={children} language={language} theme={theme}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.slice(0, -1).map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
};

export default PrismSyntaxHighlight;