import { useState, useEffect } from "react";
import sanityClient from "../sanity";
import { ErrCallback } from "../types";

export type Settings = {
  title: string;
  description: string;
  keywords: string[];
  palette: {
    _ref: string;
  };
};

const fetchSettings = () =>
  sanityClient.fetch<Settings[]>(`*[_type == "settings"]`);

export function useSettings(errorCallback: ErrCallback): Settings | undefined {
  const [settings, setSettings] = useState<Settings | undefined>(undefined);

  useEffect(() => {
    fetchSettings()
      .then((settings) => setSettings(settings[0]))
      .catch((e: unknown) => errorCallback(e));
  }, [errorCallback]);

  return settings;
}
