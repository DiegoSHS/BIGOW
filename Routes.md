```mermaid
graph TD;
    subgraph Mostrar, crear, editar y eliminar
    API-->Ventas;
    API-->Clientes;
    API-->Proveedores;
    API-->Productos;
    API-->Usuarios;
    end
    subgraph Funcionalidad
    API-->CorteDeCaja;
    end
```
Diagrama de Base de datos basado en diagrama entidad Relación original

```mermaid
erDiagram
    proveedores ||--|{productos : provee
    productos ||--|{cantidadCompras : posee
    compras ||--|{cantidadCompras : posee
    ventas ||--|{productos
    productos {
        ObjectId id
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
        ObjectId proveedorId
    }
    proveedores {
        ObjectId id
        String clave
        String direccion
        String email
        String nombre
        String telefono
    }
    cantidadCompras{
        ObjectId id
        Number cantidad
        Number costo
        Number compraId
        ObjectId productoId
    }
    compras{
        ObjectId id
        Date fecha
    }
    ventas{
        ObjectId id
        String ManodeObra
        Stiing servicio
        Number cantidad
        Number costo
        Number costoManodeObra
        Number productoId
        ObjectId ticketId
    }
    tickets{
        ObjectId id
        Date fecha
        ObjectId clienteId
    }
    clientes{
        ObjectId id
        String direccion
        String email
        String nombre
        String rfc
        String telefono
    }
    roles{
        ObjectId id
        String authority
        ObjectId userId
    }
    users{
        ObjectId id
        Boolean active
        String password
        String password

    }
```
