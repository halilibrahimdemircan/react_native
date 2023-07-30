import React, {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

type UserInfo = {
  email: string;
  token: string;
  error: string;
};

type OtherState = {
  // Diğer global durumlar burada tanımlanabilir
  // Örnek: isAuthenticated: boolean;
};

type GlobalStateType = {
  userInfo: UserInfo;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  otherState: OtherState;
  setOtherState: Dispatch<SetStateAction<OtherState>>;
};

const initialState: GlobalStateType = {
  userInfo: {email: '', token: '', error: ''},
  setUserInfo: () => {},
  otherState: {},
  setOtherState: () => {},
};

export const GlobalStateContext = createContext<GlobalStateType>(initialState);

export const GlobalStateProvider: React.FC<any> = ({children}) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(initialState.userInfo);
  const [otherState, setOtherState] = useState<OtherState>(
    initialState.otherState,
  );

  return (
    <GlobalStateContext.Provider
      value={{userInfo, setUserInfo, otherState, setOtherState}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
