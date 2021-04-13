import { css } from "emotion";

import { Shell } from "app/components";

export default function Index() {
    return (
        <Shell title="Index">
            <p
                css={css`
                    display: block;
                    width: 100%;
                    color: red;
                `}
            >
                Hello, world!
            </p>
        </Shell>
    );
}
