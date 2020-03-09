/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * External dependencies
 */
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * WordPress dependencies
 */
import { __, _x } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Color, Label, Numeric, Row } from '../../form';
import BackgroundColorControls from '../shared/backgroundColorControls';

const BoxedNumeric = styled(Numeric)`
  padding: 6px 6px;
  border-radius: 4px;
`;

function ColorControls({ properties, state, setState }) {
  const { color, textOpacity } = properties;
  return (
    <>
      <Row>
        <Label>{__('Textbox', 'web-stories')}</Label>
        <Color
          isMultiple={'' === color}
          value={state.color || '#000000'}
          onChange={(value) => setState({ ...state, color: value })}
        />
        <BoxedNumeric
          ariaLabel={__('Text Opacity', 'web-stories')}
          value={state.textOpacity}
          isMultiple={'' === textOpacity}
          flexBasis={58}
          textCenter
          onChange={(value) => setState({ ...state, textOpacity: value })}
          postfix={_x('%', 'Percentage', 'web-stories')}
        />
      </Row>
      <Row>
        <Label>{__('Textbox', 'web-stories')}</Label>
        <BackgroundColorControls state={state} setState={setState} />
      </Row>
    </>
  );
}

ColorControls.propTypes = {
  properties: PropTypes.object.isRequired,
  state: PropTypes.object.isRequired,
  setState: PropTypes.func.isRequired,
};

export default ColorControls;
