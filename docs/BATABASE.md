# Estructura de base de datos

aquí se muestra la estructura y relaciones en la base de datos de [MongoDb](https://www.mongodb.com/) tomando como base la estructura relacional original.
El diagrama original Para bases de datos relacionales se puede encontrar [aquí](https://github.com/DiegoSHS/bicimotos-gonzales-web/blob/main/docs/bicisdbAgo05.pdf)
## Diagrama de Base de datos para MongoDb

```mermaid
erDiagram
    proveedores ||--|{productos : provee
    productos ||--|{cantidadCompras : posee
    compras ||--|{cantidadCompras : posee
    productos ||--|{ventas : produce
    ventas ||--|{tickets : genera
    clientes ||--|{tickets : genera
    roles ||--|{users : tiene
    productos {
        ObjectId id PK
        Boolean activo
        String clave
        String marca
        String nombre
        Number existenciaBodega
        Number existenciaTienda
        Number precio
        Number precioPublico
        Number precioTaller
        Number stock
        ObjectId proveedorId PK, FK
    }
    proveedores {
        ObjectId id PK
        String clave
        String direccion
        String email
        String nombre
        String telefono
    }
    cantidadCompras{
        ObjectId id PK
        Number cantidad
        Number costo
        ObjectId compraId PK, FK
        ObjectId productoId PK, FK
    }
    compras{
        ObjectId id PK
        Date fecha
    }
    ventas{
        ObjectId id PK
        String ManodeObra
        Stiing servicio
        Number cantidad
        Number costo
        Number costoManodeObra
        Number productoId
        ObjectId ticketId PK, FK
    }
    tickets{
        ObjectId id PK
        Date fecha
        ObjectId clienteId PK, FK
    }
    clientes{
        ObjectId id PK
        String direccion
        String email
        String nombre
        String rfc
        String telefono
    }
    roles{
        ObjectId id PK
        String authority
        ObjectId userId PK, FK
    }
    users{
        ObjectId id PK
        Boolean active
        String password
        String password
    }
```
