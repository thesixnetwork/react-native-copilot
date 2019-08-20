// @flow
import { Component, createElement } from "react";
import PropTypes from "prop-types";

import ConnectedCopilotStep from "./ConnectedCopilotStep";

import type { CopilotContext } from "../types";
import _ from "lodash";

type Props = {
  name: string,
  order: number, // eslint-disable-line react/no-unused-prop-types
  text: string // eslint-disable-line react/no-unused-prop-types
};

class CopilotStep extends Component<Props> {
  static contextTypes = {
    _copilot: PropTypes.object
  };

  context: {
    _copilot: CopilotContext
  };

  render() {
    const currentStep = _.get(this, "context._copilot.getCurrentStep", () => {
      return false;
    })();
    if (!!currentStep) {
      return createElement(ConnectedCopilotStep, {
        ...this.props,
        _copilot: this.context._copilot,
        visible: currentStep && currentStep.name === this.props.name
      });
    } else {
      return null;
    }
  }
}

export default CopilotStep;
