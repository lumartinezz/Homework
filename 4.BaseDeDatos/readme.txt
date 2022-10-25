OK  1.  Instalar prisma
OK  2.  Inicializar prisma usando data provider mysql
OK  3.  instalar dotenv y agregar el import en el index del server
OK  4.  Crear cuenta en planet scale y crear una db, apretar donde dice conectar a la db, en el client seleccionar prisma y copiar al .env y al prisma.schema lo que nos da en planet scale
OK  5.  Agregar un modelo en el schema
OK  6.  Agregar en el endpoint de create user el metodo para crear usuario ( recordar de importar e  instanciar prisma client), obteniendo los datos del user del body
OK  7.  Agregar en el endpoint de obtener user el metodo para obtener un usuario obteniendo los datos del query param

Comandos utiles
1.  Generar tipo de datos de prisma npx prisma generate
2.  Subir a la db el schema local npx prisma db push
3.  Levantar prisma studio npx prisma studio