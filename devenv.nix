{
  pkgs,
  ...
}:

{
  # https://devenv.sh/packages/
  packages = with pkgs; [
    git
    biome
  ];

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    bun.enable = true;
  };

  dotenv.enable = true;
}
