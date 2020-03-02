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
 * Returns transform scale value based on the flip setting.
 *
 * @param {string} flip Flip value.
 */
function getTransformFlip(flip) {
  let transformFlip = null;
  if (flip === 'vertical') {
    transformFlip = 'scaleY(-1)';
  } else if (flip === 'horizontal') {
    transformFlip = 'scaleX(-1)';
  } else if (flip === 'both') {
    transformFlip = 'scale(-1, -1)';
  }
  return transformFlip;
}

export default getTransformFlip;