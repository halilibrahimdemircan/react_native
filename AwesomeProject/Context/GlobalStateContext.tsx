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

type Dungeons = {
  // Diğer global durumlar burada tanımlanabilir
  // Örnek: isAuthenticated: boolean;
};

type GlobalStateType = {
  userInfo: UserInfo;
  setUserInfo: Dispatch<SetStateAction<UserInfo>>;
  dungeons: Dungeons;
  setDungeons: Dispatch<SetStateAction<Dungeons>>;
};

const initialState: GlobalStateType = {
  userInfo: {email: '', token: '', error: ''},
  setUserInfo: () => {},
  dungeons: {},
  setDungeons: () => {},
};

export const GlobalStateContext = createContext<GlobalStateType>(initialState);

export const GlobalStateProvider: React.FC<any> = ({children}) => {
  const [userInfo, setUserInfo] = useState<UserInfo>(initialState.userInfo);
  const [dungeons, setDungeons] = useState<Dungeons>(initialState.dungeons);

  return (
    <GlobalStateContext.Provider
      value={{userInfo, setUserInfo, dungeons, setDungeons}}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
