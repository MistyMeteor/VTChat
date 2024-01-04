{ pkgs }: {
  deps = [
    (pkgs.php.buildEnv {
      extensions = { all, ... }: with all; [swoole];
    })

    # pkgs.php.extensions.curl
    # pkgs.php.extensions.yaml
    pkgs.php.extensions.swoole
    # pkgs.php.packages.composer
    pkgs.php82

  ];
}