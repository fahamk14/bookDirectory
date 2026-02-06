/// <reference types="vite/client" />

interface Module {
  '*.svg': React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  '*.svg?url': string;
}
