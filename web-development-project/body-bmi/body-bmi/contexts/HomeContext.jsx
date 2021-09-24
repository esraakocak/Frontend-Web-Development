import { createContext, useState } from "react";

const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  const [mainInfos, setMainInfos] = useState([
    {
      title: "BMI nedir",
      description:
        "Vücut kitle indeksi, vücut kütlesinin, uzunluğunun metre cinsinden karesine bölünmesiyle hesaplanır. İdeal ağırlık ise ulaşılmak istenen VKİ'nin, boy uzunluğunun karesi ile çarpılmasıyla elde edilir. ",
    },
    {
      title: "Vücut Kitle Endeksi Hesapla",
      description: "Kitle Endeksi hesaplama aracını şimdi kullanın",
      link: "vucut-kitle-endeksi-hesapla",
    },
  ]);

  const values = {
    mainInfos,
    setMainInfos,
  };

  return <HomeContext.Provider value={values}>{children}</HomeContext.Provider>;
};

export default HomeContext;