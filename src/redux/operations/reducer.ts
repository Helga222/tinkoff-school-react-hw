

const initialState = [] as any[];

export const reducer = (state =  initialState, action):any => {
  switch(action.type) {
      case "LOAD_OPERATIONS": return null;
      case "LOAD_OPERATIONS_FAILURE": return null;
      case "LOAD_OPERATIONS_SUCCESS": return [...state,...action.operationsState ];
      default: return state;
  }
}