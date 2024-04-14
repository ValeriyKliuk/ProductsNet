import React, { FC } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface LoadingViewProps {
  inverted?: boolean;
  content?: string;
}
export const LoadingView: FC<LoadingViewProps> = ({
  inverted = true,
  content = 'Loading...',
}) => {
  return (
    <Dimmer active={true} inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};
