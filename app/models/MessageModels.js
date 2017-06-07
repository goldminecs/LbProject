/**
 * Created by zachary on 2016/12/14.
 */
import {Map, List, Record} from 'immutable'

export const Message = Record({
  msg1: Map(),
  msg2: List(),
  msg3: undefined,
  msg4:'',
}, 'Message')



