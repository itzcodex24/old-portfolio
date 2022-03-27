import React, {useState} from 'react'

const useBoolean = () => {
  const [bool, setBool] = useState(false);
  const on = () => setBool(true);
  const off = () => setBool(false);
  const toggle = () => setBool((bool) => !bool);

  return [
    bool,
    {on, off, toggle},
  ]
}

export default useBoolean