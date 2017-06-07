/**
 * Created by zachary on 2016/12/14.
 */
import {Map, List, Record} from 'immutable'

export const Config = Record({
  config1: Map(),
  config2: List(),
  config3: undefined,
  config4:'',
}, 'Config')



