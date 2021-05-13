import React from "react";
import styled from "styled-components";
import { ViewHeader, ViewList, ViewState, ViewTitle } from "./view";
// header

// state
// list moudle

const ViewModule = ({ onDismiss }) => {
  return (
    <ViewModuleStyeld>
      <p>
        Using <strong>onDismiss</strong> lets users close the sheet by swiping
        it down, tapping on the backdrop or by hitting <span>esc</span> on their
        keyboard.
      </p>
      <div>
        <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
        <p>The height adjustment is done automatically, it just works™!</p>
        <div className="bg-gray-200 block rounded-md h-10 w-full my-10" />
        <p>
          Using <strong>onDismiss</strong> lets users close the sheet by swiping
          it down, tapping on the backdrop or by hitting <span>esc</span> on
          their keyboard.
        </p>
        <p>
          Using <strong>onDismiss</strong> lets users close the sheet by swiping
          it down, tapping on the backdrop or by hitting <span>esc</span> on
          their keyboard.
        </p>
        <p>
          Using <strong>onDismiss</strong> lets users close the sheet by swiping
          it down, tapping on the backdrop or by hitting <span>esc</span> on
          their keyboard.
        </p>
        <p>
          Using <strong>onDismiss</strong> lets users close the sheet by swiping
          it down, tapping on the backdrop or by hitting <span>esc</span> on
          their keyboard.
        </p>
      </div>
    </ViewModuleStyeld>
  );
};

const ViewModuleStyeld = styled.div`
  z-index: 9999;
`;

export default ViewModule;
