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
import { useLayoutEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import { LINE_LENGTH, LINE_WIDTH } from './constants';

function usePointerAddStop(ref, onAdd) {
  const [tempPointerPosition, setTempPointerPosition] = useState(null);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const nodeLeftEdge = node.getBoundingClientRect().left;

    const onClick = (evt) => {
      if (evt.target !== node) {
        return;
      }

      const relativePosition =
        (evt.pageX - nodeLeftEdge - LINE_WIDTH / 2) / LINE_LENGTH;
      onAdd(relativePosition);
      setTempPointerPosition(null);
    };

    const onPointerMove = (evt) => {
      if (evt.target !== node) {
        setTempPointerPosition(null);
        return;
      }

      setTempPointerPosition(evt.pageX - nodeLeftEdge);
    };

    const onPointerLeave = (evt) => {
      if (evt.target === node) {
        setTempPointerPosition(null);
      }
    };

    node.addEventListener('pointermove', onPointerMove);
    node.addEventListener('pointerleave', onPointerLeave);
    node.addEventListener('click', onClick);
    return () => {
      node.removeEventListener('pointermove', onPointerMove);
      node.removeEventListener('pointerleave', onPointerLeave);
      node.removeEventListener('click', onClick);
    };
  }, [ref, onAdd]);

  return tempPointerPosition;
}

export default usePointerAddStop;
