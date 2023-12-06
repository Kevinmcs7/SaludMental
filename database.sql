CREATE DATABASE IF NOT EXISTS SaludMental;

USE SaludMental;

CREATE TABLE Usuarios (
    ID_Usuario      INTEGER         PRIMARY KEY AUTO_INCREMENT,
    Nombre          VARCHAR(50)     NOT NULL,
    Apellido        VARCHAR(50)     NOT NULL,
    Correo_Electronico VARCHAR(100) NOT NULL,
    Contraseña      VARCHAR(255)    NOT NULL,
    Fecha_Registro  DATETIME        NOT NULL
);

CREATE TABLE Articulos (
    ID_Articulo     INTEGER         PRIMARY KEY AUTO_INCREMENT,
    Titulo          VARCHAR(100)    NOT NULL,
    Contenido       TEXT            NOT NULL,
    Fecha_Publicacion DATETIME      NOT NULL,
    ID_Usuario_Autor INTEGER       NOT NULL,
    FOREIGN KEY     (ID_Usuario_Autor) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Tests (
    ID_Test         INTEGER         PRIMARY KEY AUTO_INCREMENT,
    Titulo          VARCHAR(100)    NOT NULL,
    Descripcion    TEXT            NOT NULL
);

CREATE TABLE PreguntasRespuestas (
    ID_PreguntaRespuesta INTEGER    PRIMARY KEY AUTO_INCREMENT,
    ID_Test         INTEGER         NOT NULL,
    Pregunta        TEXT            NOT NULL,
    Respuesta       TEXT            NOT NULL,
    FOREIGN KEY     (ID_Test) REFERENCES Tests(ID_Test)
);

CREATE TABLE ResultadosTests (
    ID_Resultado    INTEGER         PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario      INTEGER         NOT NULL,
    ID_Test         INTEGER         NOT NULL,
    Puntuacion      INTEGER         NOT NULL,
    Fecha_Realizacion DATETIME      NOT NULL,
    FOREIGN KEY     (ID_Usuario) REFERENCES Usuarios(ID_Usuario),
    FOREIGN KEY     (ID_Test) REFERENCES Tests(ID_Test)
);

CREATE TABLE Citas (
    ID_Cita         INTEGER         PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario      INTEGER         NOT NULL,
    ID_Experto      INTEGER,
    Fecha_Cita      DATETIME        NOT NULL,
    Comentario      TEXT,
    FOREIGN KEY     (ID_Usuario) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Experiencias (
    ID_Experiencia  INTEGER         PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario      INTEGER         NOT NULL,
    Contenido       TEXT            NOT NULL,
    Fecha_Publicacion DATETIME      NOT NULL,
    FOREIGN KEY     (ID_Usuario) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Mensajes (
    ID_Mensaje      INTEGER         PRIMARY KEY AUTO_INCREMENT,
    ID_Usuario_Emisor INTEGER       NOT NULL,
    ID_Usuario_Receptor INTEGER     NOT NULL,
    Contenido       TEXT            NOT NULL,
    Fecha_Envio     DATETIME        NOT NULL,
    FOREIGN KEY     (ID_Usuario_Emisor) REFERENCES Usuarios(ID_Usuario),
    FOREIGN KEY     (ID_Usuario_Receptor) REFERENCES Usuarios(ID_Usuario)
);
