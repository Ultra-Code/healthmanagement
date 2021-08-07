{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
  nativeBuildInputs = with pkgs; [
    cmake
  ];

  buildInputs = with pkgs; [
    drogon
    (drogon.override {
      sqliteSupport = false;
      postgresSupport = true;
    })
  ];
}
