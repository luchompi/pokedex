A continuación, defino los middlewares:

Estas son funciones que se ejecutan al momento de cargar un componente con el fin de añadir una capa de personalización al comportamiento de los mismos por medio de seguridad. Estos lo que hacen es:
1. Redireccionar un componente a home si la sesión se ha iniciado: UseAuth, se implementa en login
2. Redireccionar un componente a login si la sesión no está iniciada : UseAuthRedirect, se implementa en choosePokemon

ruta del archivo ui/src/Apps/auth/services/middleware.auth.js

- Se ha implementado zustand como gestor de estados de react.

- se ha creado archivos de ejemplo de props, se pueden ver en ui/src/Apps/example

- se ha implementado useNavigate() para redireccionar paginas, se puede ver en middleware.auth.js
