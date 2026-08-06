
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Depot
 * 
 */
export type Depot = $Result.DefaultSelection<Prisma.$DepotPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model RouteStop
 * 
 */
export type RouteStop = $Result.DefaultSelection<Prisma.$RouteStopPayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model FuelLog
 * 
 */
export type FuelLog = $Result.DefaultSelection<Prisma.$FuelLogPayload>
/**
 * Model MaintenanceRecord
 * 
 */
export type MaintenanceRecord = $Result.DefaultSelection<Prisma.$MaintenanceRecordPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  MAIN_ADMIN: 'MAIN_ADMIN',
  DEPOT_ADMIN: 'DEPOT_ADMIN',
  SUPERVISOR: 'SUPERVISOR',
  OPERATIONAL_STAFF: 'OPERATIONAL_STAFF'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const DriverStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  ON_LEAVE: 'ON_LEAVE',
  ON_TRIP: 'ON_TRIP'
};

export type DriverStatus = (typeof DriverStatus)[keyof typeof DriverStatus]


export const VehicleStatus: {
  AVAILABLE: 'AVAILABLE',
  ON_TRIP: 'ON_TRIP',
  MAINTENANCE: 'MAINTENANCE',
  OUT_OF_SERVICE: 'OUT_OF_SERVICE'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const VehicleType: {
  SINGLE_DECKER: 'SINGLE_DECKER',
  DOUBLE_DECKER: 'DOUBLE_DECKER',
  ELECTRIC_BUS: 'ELECTRIC_BUS',
  ARTICULATED_BUS: 'ARTICULATED_BUS',
  COACH: 'COACH'
};

export type VehicleType = (typeof VehicleType)[keyof typeof VehicleType]


export const FuelType: {
  DIESEL: 'DIESEL',
  ELECTRIC: 'ELECTRIC',
  HYBRID: 'HYBRID',
  CNG: 'CNG'
};

export type FuelType = (typeof FuelType)[keyof typeof FuelType]


export const RouteStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type RouteStatus = (typeof RouteStatus)[keyof typeof RouteStatus]


export const ScheduleStatus: {
  SCHEDULED: 'SCHEDULED',
  ACTIVE: 'ACTIVE',
  DELAYED: 'DELAYED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus]


export const TripStatus: {
  SCHEDULED: 'SCHEDULED',
  ACTIVE: 'ACTIVE',
  DELAYED: 'DELAYED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type TripStatus = (typeof TripStatus)[keyof typeof TripStatus]


export const MaintenanceType: {
  SCHEDULED: 'SCHEDULED',
  CORRECTIVE: 'CORRECTIVE',
  EMERGENCY: 'EMERGENCY'
};

export type MaintenanceType = (typeof MaintenanceType)[keyof typeof MaintenanceType]


export const MaintenanceStatus: {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type MaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type DriverStatus = $Enums.DriverStatus

export const DriverStatus: typeof $Enums.DriverStatus

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type VehicleType = $Enums.VehicleType

export const VehicleType: typeof $Enums.VehicleType

export type FuelType = $Enums.FuelType

export const FuelType: typeof $Enums.FuelType

export type RouteStatus = $Enums.RouteStatus

export const RouteStatus: typeof $Enums.RouteStatus

export type ScheduleStatus = $Enums.ScheduleStatus

export const ScheduleStatus: typeof $Enums.ScheduleStatus

export type TripStatus = $Enums.TripStatus

export const TripStatus: typeof $Enums.TripStatus

export type MaintenanceType = $Enums.MaintenanceType

export const MaintenanceType: typeof $Enums.MaintenanceType

export type MaintenanceStatus = $Enums.MaintenanceStatus

export const MaintenanceStatus: typeof $Enums.MaintenanceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Depots
 * const depots = await prisma.depot.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Depots
   * const depots = await prisma.depot.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.depot`: Exposes CRUD operations for the **Depot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Depots
    * const depots = await prisma.depot.findMany()
    * ```
    */
  get depot(): Prisma.DepotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeStop`: Exposes CRUD operations for the **RouteStop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteStops
    * const routeStops = await prisma.routeStop.findMany()
    * ```
    */
  get routeStop(): Prisma.RouteStopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fuelLog`: Exposes CRUD operations for the **FuelLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FuelLogs
    * const fuelLogs = await prisma.fuelLog.findMany()
    * ```
    */
  get fuelLog(): Prisma.FuelLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceRecord`: Exposes CRUD operations for the **MaintenanceRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceRecords
    * const maintenanceRecords = await prisma.maintenanceRecord.findMany()
    * ```
    */
  get maintenanceRecord(): Prisma.MaintenanceRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Depot: 'Depot',
    User: 'User',
    Driver: 'Driver',
    Vehicle: 'Vehicle',
    Route: 'Route',
    RouteStop: 'RouteStop',
    Schedule: 'Schedule',
    Trip: 'Trip',
    FuelLog: 'FuelLog',
    MaintenanceRecord: 'MaintenanceRecord',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "depot" | "user" | "driver" | "vehicle" | "route" | "routeStop" | "schedule" | "trip" | "fuelLog" | "maintenanceRecord" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Depot: {
        payload: Prisma.$DepotPayload<ExtArgs>
        fields: Prisma.DepotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepotPayload>
          }
          findFirst: {
            args: Prisma.DepotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepotPayload>
          }
          findMany: {
            args: Prisma.DepotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepotPayload>[]
          }
          create: {
            args: Prisma.DepotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepotPayload>
          }
          createMany: {
            args: Prisma.DepotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DepotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepotPayload>
          }
          update: {
            args: Prisma.DepotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepotPayload>
          }
          deleteMany: {
            args: Prisma.DepotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DepotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepotPayload>
          }
          aggregate: {
            args: Prisma.DepotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepot>
          }
          groupBy: {
            args: Prisma.DepotGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepotGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepotCountArgs<ExtArgs>
            result: $Utils.Optional<DepotCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      RouteStop: {
        payload: Prisma.$RouteStopPayload<ExtArgs>
        fields: Prisma.RouteStopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteStopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteStopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          findFirst: {
            args: Prisma.RouteStopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteStopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          findMany: {
            args: Prisma.RouteStopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>[]
          }
          create: {
            args: Prisma.RouteStopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          createMany: {
            args: Prisma.RouteStopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RouteStopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          update: {
            args: Prisma.RouteStopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          deleteMany: {
            args: Prisma.RouteStopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteStopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RouteStopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          aggregate: {
            args: Prisma.RouteStopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteStop>
          }
          groupBy: {
            args: Prisma.RouteStopGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteStopGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteStopCountArgs<ExtArgs>
            result: $Utils.Optional<RouteStopCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      FuelLog: {
        payload: Prisma.$FuelLogPayload<ExtArgs>
        fields: Prisma.FuelLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuelLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuelLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          findFirst: {
            args: Prisma.FuelLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuelLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          findMany: {
            args: Prisma.FuelLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>[]
          }
          create: {
            args: Prisma.FuelLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          createMany: {
            args: Prisma.FuelLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FuelLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          update: {
            args: Prisma.FuelLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          deleteMany: {
            args: Prisma.FuelLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuelLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FuelLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          aggregate: {
            args: Prisma.FuelLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuelLog>
          }
          groupBy: {
            args: Prisma.FuelLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuelLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuelLogCountArgs<ExtArgs>
            result: $Utils.Optional<FuelLogCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceRecord: {
        payload: Prisma.$MaintenanceRecordPayload<ExtArgs>
        fields: Prisma.MaintenanceRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          findMany: {
            args: Prisma.MaintenanceRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>[]
          }
          create: {
            args: Prisma.MaintenanceRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          createMany: {
            args: Prisma.MaintenanceRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaintenanceRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          update: {
            args: Prisma.MaintenanceRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaintenanceRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRecordPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceRecord>
          }
          groupBy: {
            args: Prisma.MaintenanceRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceRecordCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRecordCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    depot?: DepotOmit
    user?: UserOmit
    driver?: DriverOmit
    vehicle?: VehicleOmit
    route?: RouteOmit
    routeStop?: RouteStopOmit
    schedule?: ScheduleOmit
    trip?: TripOmit
    fuelLog?: FuelLogOmit
    maintenanceRecord?: MaintenanceRecordOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DepotCountOutputType
   */

  export type DepotCountOutputType = {
    users: number
    drivers: number
    vehicles: number
    routes: number
    schedules: number
    fuelLogs: number
    maintenances: number
  }

  export type DepotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepotCountOutputTypeCountUsersArgs
    drivers?: boolean | DepotCountOutputTypeCountDriversArgs
    vehicles?: boolean | DepotCountOutputTypeCountVehiclesArgs
    routes?: boolean | DepotCountOutputTypeCountRoutesArgs
    schedules?: boolean | DepotCountOutputTypeCountSchedulesArgs
    fuelLogs?: boolean | DepotCountOutputTypeCountFuelLogsArgs
    maintenances?: boolean | DepotCountOutputTypeCountMaintenancesArgs
  }

  // Custom InputTypes
  /**
   * DepotCountOutputType without action
   */
  export type DepotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepotCountOutputType
     */
    select?: DepotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepotCountOutputType without action
   */
  export type DepotCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * DepotCountOutputType without action
   */
  export type DepotCountOutputTypeCountDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
  }

  /**
   * DepotCountOutputType without action
   */
  export type DepotCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }

  /**
   * DepotCountOutputType without action
   */
  export type DepotCountOutputTypeCountRoutesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
  }

  /**
   * DepotCountOutputType without action
   */
  export type DepotCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * DepotCountOutputType without action
   */
  export type DepotCountOutputTypeCountFuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelLogWhereInput
  }

  /**
   * DepotCountOutputType without action
   */
  export type DepotCountOutputTypeCountMaintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRecordWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    schedules: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | DriverCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    schedules: number
    fuelLogs: number
    maintenanceRecords: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | VehicleCountOutputTypeCountSchedulesArgs
    fuelLogs?: boolean | VehicleCountOutputTypeCountFuelLogsArgs
    maintenanceRecords?: boolean | VehicleCountOutputTypeCountMaintenanceRecordsArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountFuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelLogWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRecordWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    stops: number
    schedules: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stops?: boolean | RouteCountOutputTypeCountStopsArgs
    schedules?: boolean | RouteCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountStopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteStopWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    trips: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | ScheduleCountOutputTypeCountTripsArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Depot
   */

  export type AggregateDepot = {
    _count: DepotCountAggregateOutputType | null
    _avg: DepotAvgAggregateOutputType | null
    _sum: DepotSumAggregateOutputType | null
    _min: DepotMinAggregateOutputType | null
    _max: DepotMaxAggregateOutputType | null
  }

  export type DepotAvgAggregateOutputType = {
    id: number | null
  }

  export type DepotSumAggregateOutputType = {
    id: number | null
  }

  export type DepotMinAggregateOutputType = {
    id: number | null
    depotCode: string | null
    name: string | null
    code: string | null
    address: string | null
    phone: string | null
    email: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DepotMaxAggregateOutputType = {
    id: number | null
    depotCode: string | null
    name: string | null
    code: string | null
    address: string | null
    phone: string | null
    email: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DepotCountAggregateOutputType = {
    id: number
    depotCode: number
    name: number
    code: number
    address: number
    phone: number
    email: number
    isActive: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type DepotAvgAggregateInputType = {
    id?: true
  }

  export type DepotSumAggregateInputType = {
    id?: true
  }

  export type DepotMinAggregateInputType = {
    id?: true
    depotCode?: true
    name?: true
    code?: true
    address?: true
    phone?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DepotMaxAggregateInputType = {
    id?: true
    depotCode?: true
    name?: true
    code?: true
    address?: true
    phone?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DepotCountAggregateInputType = {
    id?: true
    depotCode?: true
    name?: true
    code?: true
    address?: true
    phone?: true
    email?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DepotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Depot to aggregate.
     */
    where?: DepotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depots to fetch.
     */
    orderBy?: DepotOrderByWithRelationInput | DepotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Depots
    **/
    _count?: true | DepotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepotMaxAggregateInputType
  }

  export type GetDepotAggregateType<T extends DepotAggregateArgs> = {
        [P in keyof T & keyof AggregateDepot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepot[P]>
      : GetScalarType<T[P], AggregateDepot[P]>
  }




  export type DepotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepotWhereInput
    orderBy?: DepotOrderByWithAggregationInput | DepotOrderByWithAggregationInput[]
    by: DepotScalarFieldEnum[] | DepotScalarFieldEnum
    having?: DepotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepotCountAggregateInputType | true
    _avg?: DepotAvgAggregateInputType
    _sum?: DepotSumAggregateInputType
    _min?: DepotMinAggregateInputType
    _max?: DepotMaxAggregateInputType
  }

  export type DepotGroupByOutputType = {
    id: number
    depotCode: string
    name: string
    code: string
    address: string | null
    phone: string | null
    email: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: DepotCountAggregateOutputType | null
    _avg: DepotAvgAggregateOutputType | null
    _sum: DepotSumAggregateOutputType | null
    _min: DepotMinAggregateOutputType | null
    _max: DepotMaxAggregateOutputType | null
  }

  type GetDepotGroupByPayload<T extends DepotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepotGroupByOutputType[P]>
            : GetScalarType<T[P], DepotGroupByOutputType[P]>
        }
      >
    >


  export type DepotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    depotCode?: boolean
    name?: boolean
    code?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    users?: boolean | Depot$usersArgs<ExtArgs>
    drivers?: boolean | Depot$driversArgs<ExtArgs>
    vehicles?: boolean | Depot$vehiclesArgs<ExtArgs>
    routes?: boolean | Depot$routesArgs<ExtArgs>
    schedules?: boolean | Depot$schedulesArgs<ExtArgs>
    fuelLogs?: boolean | Depot$fuelLogsArgs<ExtArgs>
    maintenances?: boolean | Depot$maintenancesArgs<ExtArgs>
    _count?: boolean | DepotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["depot"]>



  export type DepotSelectScalar = {
    id?: boolean
    depotCode?: boolean
    name?: boolean
    code?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type DepotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "depotCode" | "name" | "code" | "address" | "phone" | "email" | "isActive" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["depot"]>
  export type DepotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Depot$usersArgs<ExtArgs>
    drivers?: boolean | Depot$driversArgs<ExtArgs>
    vehicles?: boolean | Depot$vehiclesArgs<ExtArgs>
    routes?: boolean | Depot$routesArgs<ExtArgs>
    schedules?: boolean | Depot$schedulesArgs<ExtArgs>
    fuelLogs?: boolean | Depot$fuelLogsArgs<ExtArgs>
    maintenances?: boolean | Depot$maintenancesArgs<ExtArgs>
    _count?: boolean | DepotCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DepotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Depot"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      drivers: Prisma.$DriverPayload<ExtArgs>[]
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
      routes: Prisma.$RoutePayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      fuelLogs: Prisma.$FuelLogPayload<ExtArgs>[]
      maintenances: Prisma.$MaintenanceRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      depotCode: string
      name: string
      code: string
      address: string | null
      phone: string | null
      email: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["depot"]>
    composites: {}
  }

  type DepotGetPayload<S extends boolean | null | undefined | DepotDefaultArgs> = $Result.GetResult<Prisma.$DepotPayload, S>

  type DepotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepotCountAggregateInputType | true
    }

  export interface DepotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Depot'], meta: { name: 'Depot' } }
    /**
     * Find zero or one Depot that matches the filter.
     * @param {DepotFindUniqueArgs} args - Arguments to find a Depot
     * @example
     * // Get one Depot
     * const depot = await prisma.depot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepotFindUniqueArgs>(args: SelectSubset<T, DepotFindUniqueArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Depot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepotFindUniqueOrThrowArgs} args - Arguments to find a Depot
     * @example
     * // Get one Depot
     * const depot = await prisma.depot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepotFindUniqueOrThrowArgs>(args: SelectSubset<T, DepotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Depot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotFindFirstArgs} args - Arguments to find a Depot
     * @example
     * // Get one Depot
     * const depot = await prisma.depot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepotFindFirstArgs>(args?: SelectSubset<T, DepotFindFirstArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Depot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotFindFirstOrThrowArgs} args - Arguments to find a Depot
     * @example
     * // Get one Depot
     * const depot = await prisma.depot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepotFindFirstOrThrowArgs>(args?: SelectSubset<T, DepotFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Depots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Depots
     * const depots = await prisma.depot.findMany()
     * 
     * // Get first 10 Depots
     * const depots = await prisma.depot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const depotWithIdOnly = await prisma.depot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepotFindManyArgs>(args?: SelectSubset<T, DepotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Depot.
     * @param {DepotCreateArgs} args - Arguments to create a Depot.
     * @example
     * // Create one Depot
     * const Depot = await prisma.depot.create({
     *   data: {
     *     // ... data to create a Depot
     *   }
     * })
     * 
     */
    create<T extends DepotCreateArgs>(args: SelectSubset<T, DepotCreateArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Depots.
     * @param {DepotCreateManyArgs} args - Arguments to create many Depots.
     * @example
     * // Create many Depots
     * const depot = await prisma.depot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepotCreateManyArgs>(args?: SelectSubset<T, DepotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Depot.
     * @param {DepotDeleteArgs} args - Arguments to delete one Depot.
     * @example
     * // Delete one Depot
     * const Depot = await prisma.depot.delete({
     *   where: {
     *     // ... filter to delete one Depot
     *   }
     * })
     * 
     */
    delete<T extends DepotDeleteArgs>(args: SelectSubset<T, DepotDeleteArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Depot.
     * @param {DepotUpdateArgs} args - Arguments to update one Depot.
     * @example
     * // Update one Depot
     * const depot = await prisma.depot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepotUpdateArgs>(args: SelectSubset<T, DepotUpdateArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Depots.
     * @param {DepotDeleteManyArgs} args - Arguments to filter Depots to delete.
     * @example
     * // Delete a few Depots
     * const { count } = await prisma.depot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepotDeleteManyArgs>(args?: SelectSubset<T, DepotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Depots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Depots
     * const depot = await prisma.depot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepotUpdateManyArgs>(args: SelectSubset<T, DepotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Depot.
     * @param {DepotUpsertArgs} args - Arguments to update or create a Depot.
     * @example
     * // Update or create a Depot
     * const depot = await prisma.depot.upsert({
     *   create: {
     *     // ... data to create a Depot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Depot we want to update
     *   }
     * })
     */
    upsert<T extends DepotUpsertArgs>(args: SelectSubset<T, DepotUpsertArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Depots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotCountArgs} args - Arguments to filter Depots to count.
     * @example
     * // Count the number of Depots
     * const count = await prisma.depot.count({
     *   where: {
     *     // ... the filter for the Depots we want to count
     *   }
     * })
    **/
    count<T extends DepotCountArgs>(
      args?: Subset<T, DepotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Depot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepotAggregateArgs>(args: Subset<T, DepotAggregateArgs>): Prisma.PrismaPromise<GetDepotAggregateType<T>>

    /**
     * Group by Depot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepotGroupByArgs['orderBy'] }
        : { orderBy?: DepotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Depot model
   */
  readonly fields: DepotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Depot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Depot$usersArgs<ExtArgs> = {}>(args?: Subset<T, Depot$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drivers<T extends Depot$driversArgs<ExtArgs> = {}>(args?: Subset<T, Depot$driversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vehicles<T extends Depot$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, Depot$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routes<T extends Depot$routesArgs<ExtArgs> = {}>(args?: Subset<T, Depot$routesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Depot$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Depot$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fuelLogs<T extends Depot$fuelLogsArgs<ExtArgs> = {}>(args?: Subset<T, Depot$fuelLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenances<T extends Depot$maintenancesArgs<ExtArgs> = {}>(args?: Subset<T, Depot$maintenancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Depot model
   */
  interface DepotFieldRefs {
    readonly id: FieldRef<"Depot", 'Int'>
    readonly depotCode: FieldRef<"Depot", 'String'>
    readonly name: FieldRef<"Depot", 'String'>
    readonly code: FieldRef<"Depot", 'String'>
    readonly address: FieldRef<"Depot", 'String'>
    readonly phone: FieldRef<"Depot", 'String'>
    readonly email: FieldRef<"Depot", 'String'>
    readonly isActive: FieldRef<"Depot", 'Boolean'>
    readonly createdAt: FieldRef<"Depot", 'DateTime'>
    readonly updatedAt: FieldRef<"Depot", 'DateTime'>
    readonly deletedAt: FieldRef<"Depot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Depot findUnique
   */
  export type DepotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
    /**
     * Filter, which Depot to fetch.
     */
    where: DepotWhereUniqueInput
  }

  /**
   * Depot findUniqueOrThrow
   */
  export type DepotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
    /**
     * Filter, which Depot to fetch.
     */
    where: DepotWhereUniqueInput
  }

  /**
   * Depot findFirst
   */
  export type DepotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
    /**
     * Filter, which Depot to fetch.
     */
    where?: DepotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depots to fetch.
     */
    orderBy?: DepotOrderByWithRelationInput | DepotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Depots.
     */
    cursor?: DepotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Depots.
     */
    distinct?: DepotScalarFieldEnum | DepotScalarFieldEnum[]
  }

  /**
   * Depot findFirstOrThrow
   */
  export type DepotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
    /**
     * Filter, which Depot to fetch.
     */
    where?: DepotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depots to fetch.
     */
    orderBy?: DepotOrderByWithRelationInput | DepotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Depots.
     */
    cursor?: DepotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Depots.
     */
    distinct?: DepotScalarFieldEnum | DepotScalarFieldEnum[]
  }

  /**
   * Depot findMany
   */
  export type DepotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
    /**
     * Filter, which Depots to fetch.
     */
    where?: DepotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Depots to fetch.
     */
    orderBy?: DepotOrderByWithRelationInput | DepotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Depots.
     */
    cursor?: DepotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Depots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Depots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Depots.
     */
    distinct?: DepotScalarFieldEnum | DepotScalarFieldEnum[]
  }

  /**
   * Depot create
   */
  export type DepotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
    /**
     * The data needed to create a Depot.
     */
    data: XOR<DepotCreateInput, DepotUncheckedCreateInput>
  }

  /**
   * Depot createMany
   */
  export type DepotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Depots.
     */
    data: DepotCreateManyInput | DepotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Depot update
   */
  export type DepotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
    /**
     * The data needed to update a Depot.
     */
    data: XOR<DepotUpdateInput, DepotUncheckedUpdateInput>
    /**
     * Choose, which Depot to update.
     */
    where: DepotWhereUniqueInput
  }

  /**
   * Depot updateMany
   */
  export type DepotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Depots.
     */
    data: XOR<DepotUpdateManyMutationInput, DepotUncheckedUpdateManyInput>
    /**
     * Filter which Depots to update
     */
    where?: DepotWhereInput
    /**
     * Limit how many Depots to update.
     */
    limit?: number
  }

  /**
   * Depot upsert
   */
  export type DepotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
    /**
     * The filter to search for the Depot to update in case it exists.
     */
    where: DepotWhereUniqueInput
    /**
     * In case the Depot found by the `where` argument doesn't exist, create a new Depot with this data.
     */
    create: XOR<DepotCreateInput, DepotUncheckedCreateInput>
    /**
     * In case the Depot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepotUpdateInput, DepotUncheckedUpdateInput>
  }

  /**
   * Depot delete
   */
  export type DepotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
    /**
     * Filter which Depot to delete.
     */
    where: DepotWhereUniqueInput
  }

  /**
   * Depot deleteMany
   */
  export type DepotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Depots to delete
     */
    where?: DepotWhereInput
    /**
     * Limit how many Depots to delete.
     */
    limit?: number
  }

  /**
   * Depot.users
   */
  export type Depot$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Depot.drivers
   */
  export type Depot$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    cursor?: DriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Depot.vehicles
   */
  export type Depot$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Depot.routes
   */
  export type Depot$routesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    cursor?: RouteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Depot.schedules
   */
  export type Depot$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Depot.fuelLogs
   */
  export type Depot$fuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    where?: FuelLogWhereInput
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    cursor?: FuelLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuelLogScalarFieldEnum | FuelLogScalarFieldEnum[]
  }

  /**
   * Depot.maintenances
   */
  export type Depot$maintenancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    where?: MaintenanceRecordWhereInput
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    cursor?: MaintenanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * Depot without action
   */
  export type DepotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    depotId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    depotId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userId: string | null
    fullName: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    depotId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    fullName: string | null
    email: string | null
    username: string | null
    password: string | null
    role: $Enums.UserRole | null
    status: $Enums.UserStatus | null
    depotId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    fullName: number
    email: number
    username: number
    password: number
    role: number
    status: number
    depotId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    depotId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    depotId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    email?: true
    username?: true
    password?: true
    role?: true
    status?: true
    depotId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    email?: true
    username?: true
    password?: true
    role?: true
    status?: true
    depotId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    fullName?: true
    email?: true
    username?: true
    password?: true
    role?: true
    status?: true
    depotId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userId: string
    fullName: string
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    status: $Enums.UserStatus
    depotId: number | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    fullName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    depotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    depot?: boolean | User$depotArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    fullName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    depotId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "fullName" | "email" | "username" | "password" | "role" | "status" | "depotId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depot?: boolean | User$depotArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      depot: Prisma.$DepotPayload<ExtArgs> | null
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      fullName: string
      email: string
      username: string
      password: string
      role: $Enums.UserRole
      status: $Enums.UserStatus
      depotId: number | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depot<T extends User$depotArgs<ExtArgs> = {}>(args?: Subset<T, User$depotArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userId: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly depotId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.depot
   */
  export type User$depotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Depot
     */
    select?: DepotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Depot
     */
    omit?: DepotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepotInclude<ExtArgs> | null
    where?: DepotWhereInput
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    id: number | null
    depotId: number | null
  }

  export type DriverSumAggregateOutputType = {
    id: number | null
    depotId: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: number | null
    driverId: string | null
    depotId: number | null
    fullName: string | null
    nic: string | null
    phone: string | null
    address: string | null
    licenseNumber: string | null
    licenseExpiry: Date | null
    status: $Enums.DriverStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: number | null
    driverId: string | null
    depotId: number | null
    fullName: string | null
    nic: string | null
    phone: string | null
    address: string | null
    licenseNumber: string | null
    licenseExpiry: Date | null
    status: $Enums.DriverStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    driverId: number
    depotId: number
    fullName: number
    nic: number
    phone: number
    address: number
    licenseNumber: number
    licenseExpiry: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    id?: true
    depotId?: true
  }

  export type DriverSumAggregateInputType = {
    id?: true
    depotId?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    driverId?: true
    depotId?: true
    fullName?: true
    nic?: true
    phone?: true
    address?: true
    licenseNumber?: true
    licenseExpiry?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    driverId?: true
    depotId?: true
    fullName?: true
    nic?: true
    phone?: true
    address?: true
    licenseNumber?: true
    licenseExpiry?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    driverId?: true
    depotId?: true
    fullName?: true
    nic?: true
    phone?: true
    address?: true
    licenseNumber?: true
    licenseExpiry?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: number
    driverId: string
    depotId: number
    fullName: string
    nic: string
    phone: string
    address: string | null
    licenseNumber: string
    licenseExpiry: Date
    status: $Enums.DriverStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    driverId?: boolean
    depotId?: boolean
    fullName?: boolean
    nic?: boolean
    phone?: boolean
    address?: boolean
    licenseNumber?: boolean
    licenseExpiry?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    schedules?: boolean | Driver$schedulesArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>



  export type DriverSelectScalar = {
    id?: boolean
    driverId?: boolean
    depotId?: boolean
    fullName?: boolean
    nic?: boolean
    phone?: boolean
    address?: boolean
    licenseNumber?: boolean
    licenseExpiry?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "driverId" | "depotId" | "fullName" | "nic" | "phone" | "address" | "licenseNumber" | "licenseExpiry" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    schedules?: boolean | Driver$schedulesArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      depot: Prisma.$DepotPayload<ExtArgs>
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      driverId: string
      depotId: number
      fullName: string
      nic: string
      phone: string
      address: string | null
      licenseNumber: string
      licenseExpiry: Date
      status: $Enums.DriverStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depot<T extends DepotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepotDefaultArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends Driver$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Driver$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'Int'>
    readonly driverId: FieldRef<"Driver", 'String'>
    readonly depotId: FieldRef<"Driver", 'Int'>
    readonly fullName: FieldRef<"Driver", 'String'>
    readonly nic: FieldRef<"Driver", 'String'>
    readonly phone: FieldRef<"Driver", 'String'>
    readonly address: FieldRef<"Driver", 'String'>
    readonly licenseNumber: FieldRef<"Driver", 'String'>
    readonly licenseExpiry: FieldRef<"Driver", 'DateTime'>
    readonly status: FieldRef<"Driver", 'DriverStatus'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
    readonly deletedAt: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.schedules
   */
  export type Driver$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    id: number | null
    depotId: number | null
    seatingCapacity: number | null
    mileage: number | null
  }

  export type VehicleSumAggregateOutputType = {
    id: number | null
    depotId: number | null
    seatingCapacity: number | null
    mileage: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: number | null
    vehicleId: string | null
    depotId: number | null
    registrationNumber: string | null
    vehicleType: $Enums.VehicleType | null
    seatingCapacity: number | null
    mileage: number | null
    fuelType: $Enums.FuelType | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: number | null
    vehicleId: string | null
    depotId: number | null
    registrationNumber: string | null
    vehicleType: $Enums.VehicleType | null
    seatingCapacity: number | null
    mileage: number | null
    fuelType: $Enums.FuelType | null
    status: $Enums.VehicleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    vehicleId: number
    depotId: number
    registrationNumber: number
    vehicleType: number
    seatingCapacity: number
    mileage: number
    fuelType: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    id?: true
    depotId?: true
    seatingCapacity?: true
    mileage?: true
  }

  export type VehicleSumAggregateInputType = {
    id?: true
    depotId?: true
    seatingCapacity?: true
    mileage?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    vehicleId?: true
    depotId?: true
    registrationNumber?: true
    vehicleType?: true
    seatingCapacity?: true
    mileage?: true
    fuelType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    depotId?: true
    registrationNumber?: true
    vehicleType?: true
    seatingCapacity?: true
    mileage?: true
    fuelType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    vehicleId?: true
    depotId?: true
    registrationNumber?: true
    vehicleType?: true
    seatingCapacity?: true
    mileage?: true
    fuelType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: number
    vehicleId: string
    depotId: number
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status: $Enums.VehicleStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    depotId?: boolean
    registrationNumber?: boolean
    vehicleType?: boolean
    seatingCapacity?: boolean
    mileage?: boolean
    fuelType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    schedules?: boolean | Vehicle$schedulesArgs<ExtArgs>
    fuelLogs?: boolean | Vehicle$fuelLogsArgs<ExtArgs>
    maintenanceRecords?: boolean | Vehicle$maintenanceRecordsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>



  export type VehicleSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    depotId?: boolean
    registrationNumber?: boolean
    vehicleType?: boolean
    seatingCapacity?: boolean
    mileage?: boolean
    fuelType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "depotId" | "registrationNumber" | "vehicleType" | "seatingCapacity" | "mileage" | "fuelType" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    schedules?: boolean | Vehicle$schedulesArgs<ExtArgs>
    fuelLogs?: boolean | Vehicle$fuelLogsArgs<ExtArgs>
    maintenanceRecords?: boolean | Vehicle$maintenanceRecordsArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      depot: Prisma.$DepotPayload<ExtArgs>
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      fuelLogs: Prisma.$FuelLogPayload<ExtArgs>[]
      maintenanceRecords: Prisma.$MaintenanceRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vehicleId: string
      depotId: number
      registrationNumber: string
      vehicleType: $Enums.VehicleType
      seatingCapacity: number
      mileage: number
      fuelType: $Enums.FuelType
      status: $Enums.VehicleStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depot<T extends DepotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepotDefaultArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends Vehicle$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fuelLogs<T extends Vehicle$fuelLogsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$fuelLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenanceRecords<T extends Vehicle$maintenanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$maintenanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'Int'>
    readonly vehicleId: FieldRef<"Vehicle", 'String'>
    readonly depotId: FieldRef<"Vehicle", 'Int'>
    readonly registrationNumber: FieldRef<"Vehicle", 'String'>
    readonly vehicleType: FieldRef<"Vehicle", 'VehicleType'>
    readonly seatingCapacity: FieldRef<"Vehicle", 'Int'>
    readonly mileage: FieldRef<"Vehicle", 'Float'>
    readonly fuelType: FieldRef<"Vehicle", 'FuelType'>
    readonly status: FieldRef<"Vehicle", 'VehicleStatus'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
    readonly deletedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.schedules
   */
  export type Vehicle$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Vehicle.fuelLogs
   */
  export type Vehicle$fuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    where?: FuelLogWhereInput
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    cursor?: FuelLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuelLogScalarFieldEnum | FuelLogScalarFieldEnum[]
  }

  /**
   * Vehicle.maintenanceRecords
   */
  export type Vehicle$maintenanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    where?: MaintenanceRecordWhereInput
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    cursor?: MaintenanceRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    id: number | null
    depotId: number | null
    distance: number | null
    estimatedDuration: number | null
  }

  export type RouteSumAggregateOutputType = {
    id: number | null
    depotId: number | null
    distance: number | null
    estimatedDuration: number | null
  }

  export type RouteMinAggregateOutputType = {
    id: number | null
    routeId: string | null
    depotId: number | null
    routeName: string | null
    startLocation: string | null
    endLocation: string | null
    distance: number | null
    estimatedDuration: number | null
    status: $Enums.RouteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    id: number | null
    routeId: string | null
    depotId: number | null
    routeName: string | null
    startLocation: string | null
    endLocation: string | null
    distance: number | null
    estimatedDuration: number | null
    status: $Enums.RouteStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    routeId: number
    depotId: number
    routeName: number
    startLocation: number
    endLocation: number
    distance: number
    estimatedDuration: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    id?: true
    depotId?: true
    distance?: true
    estimatedDuration?: true
  }

  export type RouteSumAggregateInputType = {
    id?: true
    depotId?: true
    distance?: true
    estimatedDuration?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    routeId?: true
    depotId?: true
    routeName?: true
    startLocation?: true
    endLocation?: true
    distance?: true
    estimatedDuration?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    routeId?: true
    depotId?: true
    routeName?: true
    startLocation?: true
    endLocation?: true
    distance?: true
    estimatedDuration?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    routeId?: true
    depotId?: true
    routeName?: true
    startLocation?: true
    endLocation?: true
    distance?: true
    estimatedDuration?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: number
    routeId: string
    depotId: number
    routeName: string
    startLocation: string
    endLocation: string
    distance: number
    estimatedDuration: number
    status: $Enums.RouteStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    depotId?: boolean
    routeName?: boolean
    startLocation?: boolean
    endLocation?: boolean
    distance?: boolean
    estimatedDuration?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    stops?: boolean | Route$stopsArgs<ExtArgs>
    schedules?: boolean | Route$schedulesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>



  export type RouteSelectScalar = {
    id?: boolean
    routeId?: boolean
    depotId?: boolean
    routeName?: boolean
    startLocation?: boolean
    endLocation?: boolean
    distance?: boolean
    estimatedDuration?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "depotId" | "routeName" | "startLocation" | "endLocation" | "distance" | "estimatedDuration" | "status" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    stops?: boolean | Route$stopsArgs<ExtArgs>
    schedules?: boolean | Route$schedulesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      depot: Prisma.$DepotPayload<ExtArgs>
      stops: Prisma.$RouteStopPayload<ExtArgs>[]
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      routeId: string
      depotId: number
      routeName: string
      startLocation: string
      endLocation: string
      distance: number
      estimatedDuration: number
      status: $Enums.RouteStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depot<T extends DepotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepotDefaultArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stops<T extends Route$stopsArgs<ExtArgs> = {}>(args?: Subset<T, Route$stopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Route$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Route$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'Int'>
    readonly routeId: FieldRef<"Route", 'String'>
    readonly depotId: FieldRef<"Route", 'Int'>
    readonly routeName: FieldRef<"Route", 'String'>
    readonly startLocation: FieldRef<"Route", 'String'>
    readonly endLocation: FieldRef<"Route", 'String'>
    readonly distance: FieldRef<"Route", 'Float'>
    readonly estimatedDuration: FieldRef<"Route", 'Int'>
    readonly status: FieldRef<"Route", 'RouteStatus'>
    readonly createdAt: FieldRef<"Route", 'DateTime'>
    readonly updatedAt: FieldRef<"Route", 'DateTime'>
    readonly deletedAt: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.stops
   */
  export type Route$stopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    where?: RouteStopWhereInput
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    cursor?: RouteStopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteStopScalarFieldEnum | RouteStopScalarFieldEnum[]
  }

  /**
   * Route.schedules
   */
  export type Route$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model RouteStop
   */

  export type AggregateRouteStop = {
    _count: RouteStopCountAggregateOutputType | null
    _avg: RouteStopAvgAggregateOutputType | null
    _sum: RouteStopSumAggregateOutputType | null
    _min: RouteStopMinAggregateOutputType | null
    _max: RouteStopMaxAggregateOutputType | null
  }

  export type RouteStopAvgAggregateOutputType = {
    id: number | null
    routeId: number | null
    stopOrder: number | null
  }

  export type RouteStopSumAggregateOutputType = {
    id: number | null
    routeId: number | null
    stopOrder: number | null
  }

  export type RouteStopMinAggregateOutputType = {
    id: number | null
    routeId: number | null
    stopName: string | null
    stopOrder: number | null
    createdAt: Date | null
  }

  export type RouteStopMaxAggregateOutputType = {
    id: number | null
    routeId: number | null
    stopName: string | null
    stopOrder: number | null
    createdAt: Date | null
  }

  export type RouteStopCountAggregateOutputType = {
    id: number
    routeId: number
    stopName: number
    stopOrder: number
    createdAt: number
    _all: number
  }


  export type RouteStopAvgAggregateInputType = {
    id?: true
    routeId?: true
    stopOrder?: true
  }

  export type RouteStopSumAggregateInputType = {
    id?: true
    routeId?: true
    stopOrder?: true
  }

  export type RouteStopMinAggregateInputType = {
    id?: true
    routeId?: true
    stopName?: true
    stopOrder?: true
    createdAt?: true
  }

  export type RouteStopMaxAggregateInputType = {
    id?: true
    routeId?: true
    stopName?: true
    stopOrder?: true
    createdAt?: true
  }

  export type RouteStopCountAggregateInputType = {
    id?: true
    routeId?: true
    stopName?: true
    stopOrder?: true
    createdAt?: true
    _all?: true
  }

  export type RouteStopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteStop to aggregate.
     */
    where?: RouteStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStops to fetch.
     */
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteStops
    **/
    _count?: true | RouteStopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteStopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteStopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteStopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteStopMaxAggregateInputType
  }

  export type GetRouteStopAggregateType<T extends RouteStopAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteStop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteStop[P]>
      : GetScalarType<T[P], AggregateRouteStop[P]>
  }




  export type RouteStopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteStopWhereInput
    orderBy?: RouteStopOrderByWithAggregationInput | RouteStopOrderByWithAggregationInput[]
    by: RouteStopScalarFieldEnum[] | RouteStopScalarFieldEnum
    having?: RouteStopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteStopCountAggregateInputType | true
    _avg?: RouteStopAvgAggregateInputType
    _sum?: RouteStopSumAggregateInputType
    _min?: RouteStopMinAggregateInputType
    _max?: RouteStopMaxAggregateInputType
  }

  export type RouteStopGroupByOutputType = {
    id: number
    routeId: number
    stopName: string
    stopOrder: number
    createdAt: Date
    _count: RouteStopCountAggregateOutputType | null
    _avg: RouteStopAvgAggregateOutputType | null
    _sum: RouteStopSumAggregateOutputType | null
    _min: RouteStopMinAggregateOutputType | null
    _max: RouteStopMaxAggregateOutputType | null
  }

  type GetRouteStopGroupByPayload<T extends RouteStopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteStopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteStopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteStopGroupByOutputType[P]>
            : GetScalarType<T[P], RouteStopGroupByOutputType[P]>
        }
      >
    >


  export type RouteStopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    stopName?: boolean
    stopOrder?: boolean
    createdAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeStop"]>



  export type RouteStopSelectScalar = {
    id?: boolean
    routeId?: boolean
    stopName?: boolean
    stopOrder?: boolean
    createdAt?: boolean
  }

  export type RouteStopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "stopName" | "stopOrder" | "createdAt", ExtArgs["result"]["routeStop"]>
  export type RouteStopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $RouteStopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteStop"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      routeId: number
      stopName: string
      stopOrder: number
      createdAt: Date
    }, ExtArgs["result"]["routeStop"]>
    composites: {}
  }

  type RouteStopGetPayload<S extends boolean | null | undefined | RouteStopDefaultArgs> = $Result.GetResult<Prisma.$RouteStopPayload, S>

  type RouteStopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteStopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteStopCountAggregateInputType | true
    }

  export interface RouteStopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteStop'], meta: { name: 'RouteStop' } }
    /**
     * Find zero or one RouteStop that matches the filter.
     * @param {RouteStopFindUniqueArgs} args - Arguments to find a RouteStop
     * @example
     * // Get one RouteStop
     * const routeStop = await prisma.routeStop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteStopFindUniqueArgs>(args: SelectSubset<T, RouteStopFindUniqueArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteStop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteStopFindUniqueOrThrowArgs} args - Arguments to find a RouteStop
     * @example
     * // Get one RouteStop
     * const routeStop = await prisma.routeStop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteStopFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteStopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteStop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopFindFirstArgs} args - Arguments to find a RouteStop
     * @example
     * // Get one RouteStop
     * const routeStop = await prisma.routeStop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteStopFindFirstArgs>(args?: SelectSubset<T, RouteStopFindFirstArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteStop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopFindFirstOrThrowArgs} args - Arguments to find a RouteStop
     * @example
     * // Get one RouteStop
     * const routeStop = await prisma.routeStop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteStopFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteStopFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteStops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteStops
     * const routeStops = await prisma.routeStop.findMany()
     * 
     * // Get first 10 RouteStops
     * const routeStops = await prisma.routeStop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeStopWithIdOnly = await prisma.routeStop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteStopFindManyArgs>(args?: SelectSubset<T, RouteStopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteStop.
     * @param {RouteStopCreateArgs} args - Arguments to create a RouteStop.
     * @example
     * // Create one RouteStop
     * const RouteStop = await prisma.routeStop.create({
     *   data: {
     *     // ... data to create a RouteStop
     *   }
     * })
     * 
     */
    create<T extends RouteStopCreateArgs>(args: SelectSubset<T, RouteStopCreateArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteStops.
     * @param {RouteStopCreateManyArgs} args - Arguments to create many RouteStops.
     * @example
     * // Create many RouteStops
     * const routeStop = await prisma.routeStop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteStopCreateManyArgs>(args?: SelectSubset<T, RouteStopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RouteStop.
     * @param {RouteStopDeleteArgs} args - Arguments to delete one RouteStop.
     * @example
     * // Delete one RouteStop
     * const RouteStop = await prisma.routeStop.delete({
     *   where: {
     *     // ... filter to delete one RouteStop
     *   }
     * })
     * 
     */
    delete<T extends RouteStopDeleteArgs>(args: SelectSubset<T, RouteStopDeleteArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteStop.
     * @param {RouteStopUpdateArgs} args - Arguments to update one RouteStop.
     * @example
     * // Update one RouteStop
     * const routeStop = await prisma.routeStop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteStopUpdateArgs>(args: SelectSubset<T, RouteStopUpdateArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteStops.
     * @param {RouteStopDeleteManyArgs} args - Arguments to filter RouteStops to delete.
     * @example
     * // Delete a few RouteStops
     * const { count } = await prisma.routeStop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteStopDeleteManyArgs>(args?: SelectSubset<T, RouteStopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteStops
     * const routeStop = await prisma.routeStop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteStopUpdateManyArgs>(args: SelectSubset<T, RouteStopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RouteStop.
     * @param {RouteStopUpsertArgs} args - Arguments to update or create a RouteStop.
     * @example
     * // Update or create a RouteStop
     * const routeStop = await prisma.routeStop.upsert({
     *   create: {
     *     // ... data to create a RouteStop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteStop we want to update
     *   }
     * })
     */
    upsert<T extends RouteStopUpsertArgs>(args: SelectSubset<T, RouteStopUpsertArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopCountArgs} args - Arguments to filter RouteStops to count.
     * @example
     * // Count the number of RouteStops
     * const count = await prisma.routeStop.count({
     *   where: {
     *     // ... the filter for the RouteStops we want to count
     *   }
     * })
    **/
    count<T extends RouteStopCountArgs>(
      args?: Subset<T, RouteStopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteStopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteStopAggregateArgs>(args: Subset<T, RouteStopAggregateArgs>): Prisma.PrismaPromise<GetRouteStopAggregateType<T>>

    /**
     * Group by RouteStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteStopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteStopGroupByArgs['orderBy'] }
        : { orderBy?: RouteStopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteStopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteStopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteStop model
   */
  readonly fields: RouteStopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteStop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteStopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RouteStop model
   */
  interface RouteStopFieldRefs {
    readonly id: FieldRef<"RouteStop", 'Int'>
    readonly routeId: FieldRef<"RouteStop", 'Int'>
    readonly stopName: FieldRef<"RouteStop", 'String'>
    readonly stopOrder: FieldRef<"RouteStop", 'Int'>
    readonly createdAt: FieldRef<"RouteStop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RouteStop findUnique
   */
  export type RouteStopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteStop to fetch.
     */
    where: RouteStopWhereUniqueInput
  }

  /**
   * RouteStop findUniqueOrThrow
   */
  export type RouteStopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteStop to fetch.
     */
    where: RouteStopWhereUniqueInput
  }

  /**
   * RouteStop findFirst
   */
  export type RouteStopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteStop to fetch.
     */
    where?: RouteStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStops to fetch.
     */
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteStops.
     */
    cursor?: RouteStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteStops.
     */
    distinct?: RouteStopScalarFieldEnum | RouteStopScalarFieldEnum[]
  }

  /**
   * RouteStop findFirstOrThrow
   */
  export type RouteStopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteStop to fetch.
     */
    where?: RouteStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStops to fetch.
     */
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteStops.
     */
    cursor?: RouteStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteStops.
     */
    distinct?: RouteStopScalarFieldEnum | RouteStopScalarFieldEnum[]
  }

  /**
   * RouteStop findMany
   */
  export type RouteStopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteStops to fetch.
     */
    where?: RouteStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStops to fetch.
     */
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteStops.
     */
    cursor?: RouteStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteStops.
     */
    distinct?: RouteStopScalarFieldEnum | RouteStopScalarFieldEnum[]
  }

  /**
   * RouteStop create
   */
  export type RouteStopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteStop.
     */
    data: XOR<RouteStopCreateInput, RouteStopUncheckedCreateInput>
  }

  /**
   * RouteStop createMany
   */
  export type RouteStopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteStops.
     */
    data: RouteStopCreateManyInput | RouteStopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteStop update
   */
  export type RouteStopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteStop.
     */
    data: XOR<RouteStopUpdateInput, RouteStopUncheckedUpdateInput>
    /**
     * Choose, which RouteStop to update.
     */
    where: RouteStopWhereUniqueInput
  }

  /**
   * RouteStop updateMany
   */
  export type RouteStopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteStops.
     */
    data: XOR<RouteStopUpdateManyMutationInput, RouteStopUncheckedUpdateManyInput>
    /**
     * Filter which RouteStops to update
     */
    where?: RouteStopWhereInput
    /**
     * Limit how many RouteStops to update.
     */
    limit?: number
  }

  /**
   * RouteStop upsert
   */
  export type RouteStopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteStop to update in case it exists.
     */
    where: RouteStopWhereUniqueInput
    /**
     * In case the RouteStop found by the `where` argument doesn't exist, create a new RouteStop with this data.
     */
    create: XOR<RouteStopCreateInput, RouteStopUncheckedCreateInput>
    /**
     * In case the RouteStop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteStopUpdateInput, RouteStopUncheckedUpdateInput>
  }

  /**
   * RouteStop delete
   */
  export type RouteStopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter which RouteStop to delete.
     */
    where: RouteStopWhereUniqueInput
  }

  /**
   * RouteStop deleteMany
   */
  export type RouteStopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteStops to delete
     */
    where?: RouteStopWhereInput
    /**
     * Limit how many RouteStops to delete.
     */
    limit?: number
  }

  /**
   * RouteStop without action
   */
  export type RouteStopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
    depotId: number | null
    routeId: number | null
    vehicleId: number | null
    driverId: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
    depotId: number | null
    routeId: number | null
    vehicleId: number | null
    driverId: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    scheduleId: string | null
    depotId: number | null
    routeId: number | null
    vehicleId: number | null
    driverId: number | null
    departureTime: Date | null
    arrivalTime: Date | null
    scheduleDate: Date | null
    status: $Enums.ScheduleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    scheduleId: string | null
    depotId: number | null
    routeId: number | null
    vehicleId: number | null
    driverId: number | null
    departureTime: Date | null
    arrivalTime: Date | null
    scheduleDate: Date | null
    status: $Enums.ScheduleStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    scheduleId: number
    depotId: number
    routeId: number
    vehicleId: number
    driverId: number
    departureTime: number
    arrivalTime: number
    scheduleDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
    depotId?: true
    routeId?: true
    vehicleId?: true
    driverId?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
    depotId?: true
    routeId?: true
    vehicleId?: true
    driverId?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    scheduleId?: true
    depotId?: true
    routeId?: true
    vehicleId?: true
    driverId?: true
    departureTime?: true
    arrivalTime?: true
    scheduleDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    scheduleId?: true
    depotId?: true
    routeId?: true
    vehicleId?: true
    driverId?: true
    departureTime?: true
    arrivalTime?: true
    scheduleDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    scheduleId?: true
    depotId?: true
    routeId?: true
    vehicleId?: true
    driverId?: true
    departureTime?: true
    arrivalTime?: true
    scheduleDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    scheduleId: string
    depotId: number
    routeId: number
    vehicleId: number
    driverId: number
    departureTime: Date
    arrivalTime: Date
    scheduleDate: Date
    status: $Enums.ScheduleStatus
    createdAt: Date
    updatedAt: Date
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scheduleId?: boolean
    depotId?: boolean
    routeId?: boolean
    vehicleId?: boolean
    driverId?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    scheduleDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    trips?: boolean | Schedule$tripsArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>



  export type ScheduleSelectScalar = {
    id?: boolean
    scheduleId?: boolean
    depotId?: boolean
    routeId?: boolean
    vehicleId?: boolean
    driverId?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    scheduleDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scheduleId" | "depotId" | "routeId" | "vehicleId" | "driverId" | "departureTime" | "arrivalTime" | "scheduleDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    trips?: boolean | Schedule$tripsArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      depot: Prisma.$DepotPayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
      trips: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scheduleId: string
      depotId: number
      routeId: number
      vehicleId: number
      driverId: number
      departureTime: Date
      arrivalTime: Date
      scheduleDate: Date
      status: $Enums.ScheduleStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depot<T extends DepotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepotDefaultArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trips<T extends Schedule$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly scheduleId: FieldRef<"Schedule", 'String'>
    readonly depotId: FieldRef<"Schedule", 'Int'>
    readonly routeId: FieldRef<"Schedule", 'Int'>
    readonly vehicleId: FieldRef<"Schedule", 'Int'>
    readonly driverId: FieldRef<"Schedule", 'Int'>
    readonly departureTime: FieldRef<"Schedule", 'DateTime'>
    readonly arrivalTime: FieldRef<"Schedule", 'DateTime'>
    readonly scheduleDate: FieldRef<"Schedule", 'DateTime'>
    readonly status: FieldRef<"Schedule", 'ScheduleStatus'>
    readonly createdAt: FieldRef<"Schedule", 'DateTime'>
    readonly updatedAt: FieldRef<"Schedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.trips
   */
  export type Schedule$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    id: number | null
    scheduleId: number | null
  }

  export type TripSumAggregateOutputType = {
    id: number | null
    scheduleId: number | null
  }

  export type TripMinAggregateOutputType = {
    id: number | null
    tripId: string | null
    scheduleId: number | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.TripStatus | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: number | null
    tripId: string | null
    scheduleId: number | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.TripStatus | null
    remarks: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    tripId: number
    scheduleId: number
    startTime: number
    endTime: number
    status: number
    remarks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    id?: true
    scheduleId?: true
  }

  export type TripSumAggregateInputType = {
    id?: true
    scheduleId?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    tripId?: true
    scheduleId?: true
    startTime?: true
    endTime?: true
    status?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    tripId?: true
    scheduleId?: true
    startTime?: true
    endTime?: true
    status?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    tripId?: true
    scheduleId?: true
    startTime?: true
    endTime?: true
    status?: true
    remarks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: number
    tripId: string
    scheduleId: number
    startTime: Date
    endTime: Date | null
    status: $Enums.TripStatus
    remarks: string | null
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tripId?: boolean
    scheduleId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>



  export type TripSelectScalar = {
    id?: boolean
    tripId?: boolean
    scheduleId?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    remarks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tripId" | "scheduleId" | "startTime" | "endTime" | "status" | "remarks" | "createdAt" | "updatedAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tripId: string
      scheduleId: number
      startTime: Date
      endTime: Date | null
      status: $Enums.TripStatus
      remarks: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'Int'>
    readonly tripId: FieldRef<"Trip", 'String'>
    readonly scheduleId: FieldRef<"Trip", 'Int'>
    readonly startTime: FieldRef<"Trip", 'DateTime'>
    readonly endTime: FieldRef<"Trip", 'DateTime'>
    readonly status: FieldRef<"Trip", 'TripStatus'>
    readonly remarks: FieldRef<"Trip", 'String'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model FuelLog
   */

  export type AggregateFuelLog = {
    _count: FuelLogCountAggregateOutputType | null
    _avg: FuelLogAvgAggregateOutputType | null
    _sum: FuelLogSumAggregateOutputType | null
    _min: FuelLogMinAggregateOutputType | null
    _max: FuelLogMaxAggregateOutputType | null
  }

  export type FuelLogAvgAggregateOutputType = {
    id: number | null
    depotId: number | null
    vehicleId: number | null
    liters: number | null
    cost: number | null
    distanceCovered: number | null
  }

  export type FuelLogSumAggregateOutputType = {
    id: number | null
    depotId: number | null
    vehicleId: number | null
    liters: number | null
    cost: number | null
    distanceCovered: number | null
  }

  export type FuelLogMinAggregateOutputType = {
    id: number | null
    fuelId: string | null
    depotId: number | null
    vehicleId: number | null
    date: Date | null
    liters: number | null
    cost: number | null
    distanceCovered: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuelLogMaxAggregateOutputType = {
    id: number | null
    fuelId: string | null
    depotId: number | null
    vehicleId: number | null
    date: Date | null
    liters: number | null
    cost: number | null
    distanceCovered: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FuelLogCountAggregateOutputType = {
    id: number
    fuelId: number
    depotId: number
    vehicleId: number
    date: number
    liters: number
    cost: number
    distanceCovered: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FuelLogAvgAggregateInputType = {
    id?: true
    depotId?: true
    vehicleId?: true
    liters?: true
    cost?: true
    distanceCovered?: true
  }

  export type FuelLogSumAggregateInputType = {
    id?: true
    depotId?: true
    vehicleId?: true
    liters?: true
    cost?: true
    distanceCovered?: true
  }

  export type FuelLogMinAggregateInputType = {
    id?: true
    fuelId?: true
    depotId?: true
    vehicleId?: true
    date?: true
    liters?: true
    cost?: true
    distanceCovered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuelLogMaxAggregateInputType = {
    id?: true
    fuelId?: true
    depotId?: true
    vehicleId?: true
    date?: true
    liters?: true
    cost?: true
    distanceCovered?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FuelLogCountAggregateInputType = {
    id?: true
    fuelId?: true
    depotId?: true
    vehicleId?: true
    date?: true
    liters?: true
    cost?: true
    distanceCovered?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FuelLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuelLog to aggregate.
     */
    where?: FuelLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelLogs to fetch.
     */
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuelLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FuelLogs
    **/
    _count?: true | FuelLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuelLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuelLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuelLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuelLogMaxAggregateInputType
  }

  export type GetFuelLogAggregateType<T extends FuelLogAggregateArgs> = {
        [P in keyof T & keyof AggregateFuelLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuelLog[P]>
      : GetScalarType<T[P], AggregateFuelLog[P]>
  }




  export type FuelLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelLogWhereInput
    orderBy?: FuelLogOrderByWithAggregationInput | FuelLogOrderByWithAggregationInput[]
    by: FuelLogScalarFieldEnum[] | FuelLogScalarFieldEnum
    having?: FuelLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuelLogCountAggregateInputType | true
    _avg?: FuelLogAvgAggregateInputType
    _sum?: FuelLogSumAggregateInputType
    _min?: FuelLogMinAggregateInputType
    _max?: FuelLogMaxAggregateInputType
  }

  export type FuelLogGroupByOutputType = {
    id: number
    fuelId: string
    depotId: number
    vehicleId: number
    date: Date
    liters: number
    cost: number
    distanceCovered: number
    createdAt: Date
    updatedAt: Date
    _count: FuelLogCountAggregateOutputType | null
    _avg: FuelLogAvgAggregateOutputType | null
    _sum: FuelLogSumAggregateOutputType | null
    _min: FuelLogMinAggregateOutputType | null
    _max: FuelLogMaxAggregateOutputType | null
  }

  type GetFuelLogGroupByPayload<T extends FuelLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuelLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuelLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuelLogGroupByOutputType[P]>
            : GetScalarType<T[P], FuelLogGroupByOutputType[P]>
        }
      >
    >


  export type FuelLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fuelId?: boolean
    depotId?: boolean
    vehicleId?: boolean
    date?: boolean
    liters?: boolean
    cost?: boolean
    distanceCovered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fuelLog"]>



  export type FuelLogSelectScalar = {
    id?: boolean
    fuelId?: boolean
    depotId?: boolean
    vehicleId?: boolean
    date?: boolean
    liters?: boolean
    cost?: boolean
    distanceCovered?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FuelLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fuelId" | "depotId" | "vehicleId" | "date" | "liters" | "cost" | "distanceCovered" | "createdAt" | "updatedAt", ExtArgs["result"]["fuelLog"]>
  export type FuelLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $FuelLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FuelLog"
    objects: {
      depot: Prisma.$DepotPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fuelId: string
      depotId: number
      vehicleId: number
      date: Date
      liters: number
      cost: number
      distanceCovered: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fuelLog"]>
    composites: {}
  }

  type FuelLogGetPayload<S extends boolean | null | undefined | FuelLogDefaultArgs> = $Result.GetResult<Prisma.$FuelLogPayload, S>

  type FuelLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuelLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuelLogCountAggregateInputType | true
    }

  export interface FuelLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FuelLog'], meta: { name: 'FuelLog' } }
    /**
     * Find zero or one FuelLog that matches the filter.
     * @param {FuelLogFindUniqueArgs} args - Arguments to find a FuelLog
     * @example
     * // Get one FuelLog
     * const fuelLog = await prisma.fuelLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuelLogFindUniqueArgs>(args: SelectSubset<T, FuelLogFindUniqueArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FuelLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuelLogFindUniqueOrThrowArgs} args - Arguments to find a FuelLog
     * @example
     * // Get one FuelLog
     * const fuelLog = await prisma.fuelLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuelLogFindUniqueOrThrowArgs>(args: SelectSubset<T, FuelLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuelLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogFindFirstArgs} args - Arguments to find a FuelLog
     * @example
     * // Get one FuelLog
     * const fuelLog = await prisma.fuelLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuelLogFindFirstArgs>(args?: SelectSubset<T, FuelLogFindFirstArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuelLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogFindFirstOrThrowArgs} args - Arguments to find a FuelLog
     * @example
     * // Get one FuelLog
     * const fuelLog = await prisma.fuelLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuelLogFindFirstOrThrowArgs>(args?: SelectSubset<T, FuelLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FuelLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FuelLogs
     * const fuelLogs = await prisma.fuelLog.findMany()
     * 
     * // Get first 10 FuelLogs
     * const fuelLogs = await prisma.fuelLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fuelLogWithIdOnly = await prisma.fuelLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuelLogFindManyArgs>(args?: SelectSubset<T, FuelLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FuelLog.
     * @param {FuelLogCreateArgs} args - Arguments to create a FuelLog.
     * @example
     * // Create one FuelLog
     * const FuelLog = await prisma.fuelLog.create({
     *   data: {
     *     // ... data to create a FuelLog
     *   }
     * })
     * 
     */
    create<T extends FuelLogCreateArgs>(args: SelectSubset<T, FuelLogCreateArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FuelLogs.
     * @param {FuelLogCreateManyArgs} args - Arguments to create many FuelLogs.
     * @example
     * // Create many FuelLogs
     * const fuelLog = await prisma.fuelLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuelLogCreateManyArgs>(args?: SelectSubset<T, FuelLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FuelLog.
     * @param {FuelLogDeleteArgs} args - Arguments to delete one FuelLog.
     * @example
     * // Delete one FuelLog
     * const FuelLog = await prisma.fuelLog.delete({
     *   where: {
     *     // ... filter to delete one FuelLog
     *   }
     * })
     * 
     */
    delete<T extends FuelLogDeleteArgs>(args: SelectSubset<T, FuelLogDeleteArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FuelLog.
     * @param {FuelLogUpdateArgs} args - Arguments to update one FuelLog.
     * @example
     * // Update one FuelLog
     * const fuelLog = await prisma.fuelLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuelLogUpdateArgs>(args: SelectSubset<T, FuelLogUpdateArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FuelLogs.
     * @param {FuelLogDeleteManyArgs} args - Arguments to filter FuelLogs to delete.
     * @example
     * // Delete a few FuelLogs
     * const { count } = await prisma.fuelLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuelLogDeleteManyArgs>(args?: SelectSubset<T, FuelLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuelLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FuelLogs
     * const fuelLog = await prisma.fuelLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuelLogUpdateManyArgs>(args: SelectSubset<T, FuelLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FuelLog.
     * @param {FuelLogUpsertArgs} args - Arguments to update or create a FuelLog.
     * @example
     * // Update or create a FuelLog
     * const fuelLog = await prisma.fuelLog.upsert({
     *   create: {
     *     // ... data to create a FuelLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FuelLog we want to update
     *   }
     * })
     */
    upsert<T extends FuelLogUpsertArgs>(args: SelectSubset<T, FuelLogUpsertArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FuelLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogCountArgs} args - Arguments to filter FuelLogs to count.
     * @example
     * // Count the number of FuelLogs
     * const count = await prisma.fuelLog.count({
     *   where: {
     *     // ... the filter for the FuelLogs we want to count
     *   }
     * })
    **/
    count<T extends FuelLogCountArgs>(
      args?: Subset<T, FuelLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuelLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FuelLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FuelLogAggregateArgs>(args: Subset<T, FuelLogAggregateArgs>): Prisma.PrismaPromise<GetFuelLogAggregateType<T>>

    /**
     * Group by FuelLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FuelLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuelLogGroupByArgs['orderBy'] }
        : { orderBy?: FuelLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuelLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuelLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FuelLog model
   */
  readonly fields: FuelLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FuelLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuelLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depot<T extends DepotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepotDefaultArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FuelLog model
   */
  interface FuelLogFieldRefs {
    readonly id: FieldRef<"FuelLog", 'Int'>
    readonly fuelId: FieldRef<"FuelLog", 'String'>
    readonly depotId: FieldRef<"FuelLog", 'Int'>
    readonly vehicleId: FieldRef<"FuelLog", 'Int'>
    readonly date: FieldRef<"FuelLog", 'DateTime'>
    readonly liters: FieldRef<"FuelLog", 'Float'>
    readonly cost: FieldRef<"FuelLog", 'Float'>
    readonly distanceCovered: FieldRef<"FuelLog", 'Float'>
    readonly createdAt: FieldRef<"FuelLog", 'DateTime'>
    readonly updatedAt: FieldRef<"FuelLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FuelLog findUnique
   */
  export type FuelLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter, which FuelLog to fetch.
     */
    where: FuelLogWhereUniqueInput
  }

  /**
   * FuelLog findUniqueOrThrow
   */
  export type FuelLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter, which FuelLog to fetch.
     */
    where: FuelLogWhereUniqueInput
  }

  /**
   * FuelLog findFirst
   */
  export type FuelLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter, which FuelLog to fetch.
     */
    where?: FuelLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelLogs to fetch.
     */
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuelLogs.
     */
    cursor?: FuelLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuelLogs.
     */
    distinct?: FuelLogScalarFieldEnum | FuelLogScalarFieldEnum[]
  }

  /**
   * FuelLog findFirstOrThrow
   */
  export type FuelLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter, which FuelLog to fetch.
     */
    where?: FuelLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelLogs to fetch.
     */
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuelLogs.
     */
    cursor?: FuelLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuelLogs.
     */
    distinct?: FuelLogScalarFieldEnum | FuelLogScalarFieldEnum[]
  }

  /**
   * FuelLog findMany
   */
  export type FuelLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter, which FuelLogs to fetch.
     */
    where?: FuelLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelLogs to fetch.
     */
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FuelLogs.
     */
    cursor?: FuelLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuelLogs.
     */
    distinct?: FuelLogScalarFieldEnum | FuelLogScalarFieldEnum[]
  }

  /**
   * FuelLog create
   */
  export type FuelLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * The data needed to create a FuelLog.
     */
    data: XOR<FuelLogCreateInput, FuelLogUncheckedCreateInput>
  }

  /**
   * FuelLog createMany
   */
  export type FuelLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FuelLogs.
     */
    data: FuelLogCreateManyInput | FuelLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FuelLog update
   */
  export type FuelLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * The data needed to update a FuelLog.
     */
    data: XOR<FuelLogUpdateInput, FuelLogUncheckedUpdateInput>
    /**
     * Choose, which FuelLog to update.
     */
    where: FuelLogWhereUniqueInput
  }

  /**
   * FuelLog updateMany
   */
  export type FuelLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FuelLogs.
     */
    data: XOR<FuelLogUpdateManyMutationInput, FuelLogUncheckedUpdateManyInput>
    /**
     * Filter which FuelLogs to update
     */
    where?: FuelLogWhereInput
    /**
     * Limit how many FuelLogs to update.
     */
    limit?: number
  }

  /**
   * FuelLog upsert
   */
  export type FuelLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * The filter to search for the FuelLog to update in case it exists.
     */
    where: FuelLogWhereUniqueInput
    /**
     * In case the FuelLog found by the `where` argument doesn't exist, create a new FuelLog with this data.
     */
    create: XOR<FuelLogCreateInput, FuelLogUncheckedCreateInput>
    /**
     * In case the FuelLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuelLogUpdateInput, FuelLogUncheckedUpdateInput>
  }

  /**
   * FuelLog delete
   */
  export type FuelLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter which FuelLog to delete.
     */
    where: FuelLogWhereUniqueInput
  }

  /**
   * FuelLog deleteMany
   */
  export type FuelLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuelLogs to delete
     */
    where?: FuelLogWhereInput
    /**
     * Limit how many FuelLogs to delete.
     */
    limit?: number
  }

  /**
   * FuelLog without action
   */
  export type FuelLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceRecord
   */

  export type AggregateMaintenanceRecord = {
    _count: MaintenanceRecordCountAggregateOutputType | null
    _avg: MaintenanceRecordAvgAggregateOutputType | null
    _sum: MaintenanceRecordSumAggregateOutputType | null
    _min: MaintenanceRecordMinAggregateOutputType | null
    _max: MaintenanceRecordMaxAggregateOutputType | null
  }

  export type MaintenanceRecordAvgAggregateOutputType = {
    id: number | null
    depotId: number | null
    vehicleId: number | null
    cost: number | null
  }

  export type MaintenanceRecordSumAggregateOutputType = {
    id: number | null
    depotId: number | null
    vehicleId: number | null
    cost: number | null
  }

  export type MaintenanceRecordMinAggregateOutputType = {
    id: number | null
    maintenanceId: string | null
    depotId: number | null
    vehicleId: number | null
    maintenanceType: $Enums.MaintenanceType | null
    serviceDate: Date | null
    nextServiceDate: Date | null
    cost: number | null
    remarks: string | null
    status: $Enums.MaintenanceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceRecordMaxAggregateOutputType = {
    id: number | null
    maintenanceId: string | null
    depotId: number | null
    vehicleId: number | null
    maintenanceType: $Enums.MaintenanceType | null
    serviceDate: Date | null
    nextServiceDate: Date | null
    cost: number | null
    remarks: string | null
    status: $Enums.MaintenanceStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceRecordCountAggregateOutputType = {
    id: number
    maintenanceId: number
    depotId: number
    vehicleId: number
    maintenanceType: number
    serviceDate: number
    nextServiceDate: number
    cost: number
    remarks: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaintenanceRecordAvgAggregateInputType = {
    id?: true
    depotId?: true
    vehicleId?: true
    cost?: true
  }

  export type MaintenanceRecordSumAggregateInputType = {
    id?: true
    depotId?: true
    vehicleId?: true
    cost?: true
  }

  export type MaintenanceRecordMinAggregateInputType = {
    id?: true
    maintenanceId?: true
    depotId?: true
    vehicleId?: true
    maintenanceType?: true
    serviceDate?: true
    nextServiceDate?: true
    cost?: true
    remarks?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceRecordMaxAggregateInputType = {
    id?: true
    maintenanceId?: true
    depotId?: true
    vehicleId?: true
    maintenanceType?: true
    serviceDate?: true
    nextServiceDate?: true
    cost?: true
    remarks?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceRecordCountAggregateInputType = {
    id?: true
    maintenanceId?: true
    depotId?: true
    vehicleId?: true
    maintenanceType?: true
    serviceDate?: true
    nextServiceDate?: true
    cost?: true
    remarks?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaintenanceRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRecord to aggregate.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceRecords
    **/
    _count?: true | MaintenanceRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceRecordMaxAggregateInputType
  }

  export type GetMaintenanceRecordAggregateType<T extends MaintenanceRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceRecord[P]>
      : GetScalarType<T[P], AggregateMaintenanceRecord[P]>
  }




  export type MaintenanceRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRecordWhereInput
    orderBy?: MaintenanceRecordOrderByWithAggregationInput | MaintenanceRecordOrderByWithAggregationInput[]
    by: MaintenanceRecordScalarFieldEnum[] | MaintenanceRecordScalarFieldEnum
    having?: MaintenanceRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceRecordCountAggregateInputType | true
    _avg?: MaintenanceRecordAvgAggregateInputType
    _sum?: MaintenanceRecordSumAggregateInputType
    _min?: MaintenanceRecordMinAggregateInputType
    _max?: MaintenanceRecordMaxAggregateInputType
  }

  export type MaintenanceRecordGroupByOutputType = {
    id: number
    maintenanceId: string
    depotId: number
    vehicleId: number
    maintenanceType: $Enums.MaintenanceType
    serviceDate: Date
    nextServiceDate: Date | null
    cost: number
    remarks: string | null
    status: $Enums.MaintenanceStatus
    createdAt: Date
    updatedAt: Date
    _count: MaintenanceRecordCountAggregateOutputType | null
    _avg: MaintenanceRecordAvgAggregateOutputType | null
    _sum: MaintenanceRecordSumAggregateOutputType | null
    _min: MaintenanceRecordMinAggregateOutputType | null
    _max: MaintenanceRecordMaxAggregateOutputType | null
  }

  type GetMaintenanceRecordGroupByPayload<T extends MaintenanceRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceRecordGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceRecordGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maintenanceId?: boolean
    depotId?: boolean
    vehicleId?: boolean
    maintenanceType?: boolean
    serviceDate?: boolean
    nextServiceDate?: boolean
    cost?: boolean
    remarks?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRecord"]>



  export type MaintenanceRecordSelectScalar = {
    id?: boolean
    maintenanceId?: boolean
    depotId?: boolean
    vehicleId?: boolean
    maintenanceType?: boolean
    serviceDate?: boolean
    nextServiceDate?: boolean
    cost?: boolean
    remarks?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaintenanceRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maintenanceId" | "depotId" | "vehicleId" | "maintenanceType" | "serviceDate" | "nextServiceDate" | "cost" | "remarks" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["maintenanceRecord"]>
  export type MaintenanceRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    depot?: boolean | DepotDefaultArgs<ExtArgs>
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $MaintenanceRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceRecord"
    objects: {
      depot: Prisma.$DepotPayload<ExtArgs>
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      maintenanceId: string
      depotId: number
      vehicleId: number
      maintenanceType: $Enums.MaintenanceType
      serviceDate: Date
      nextServiceDate: Date | null
      cost: number
      remarks: string | null
      status: $Enums.MaintenanceStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maintenanceRecord"]>
    composites: {}
  }

  type MaintenanceRecordGetPayload<S extends boolean | null | undefined | MaintenanceRecordDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceRecordPayload, S>

  type MaintenanceRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceRecordCountAggregateInputType | true
    }

  export interface MaintenanceRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceRecord'], meta: { name: 'MaintenanceRecord' } }
    /**
     * Find zero or one MaintenanceRecord that matches the filter.
     * @param {MaintenanceRecordFindUniqueArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceRecordFindUniqueArgs>(args: SelectSubset<T, MaintenanceRecordFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceRecordFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordFindFirstArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceRecordFindFirstArgs>(args?: SelectSubset<T, MaintenanceRecordFindFirstArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordFindFirstOrThrowArgs} args - Arguments to find a MaintenanceRecord
     * @example
     * // Get one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceRecords
     * const maintenanceRecords = await prisma.maintenanceRecord.findMany()
     * 
     * // Get first 10 MaintenanceRecords
     * const maintenanceRecords = await prisma.maintenanceRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceRecordWithIdOnly = await prisma.maintenanceRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceRecordFindManyArgs>(args?: SelectSubset<T, MaintenanceRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceRecord.
     * @param {MaintenanceRecordCreateArgs} args - Arguments to create a MaintenanceRecord.
     * @example
     * // Create one MaintenanceRecord
     * const MaintenanceRecord = await prisma.maintenanceRecord.create({
     *   data: {
     *     // ... data to create a MaintenanceRecord
     *   }
     * })
     * 
     */
    create<T extends MaintenanceRecordCreateArgs>(args: SelectSubset<T, MaintenanceRecordCreateArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceRecords.
     * @param {MaintenanceRecordCreateManyArgs} args - Arguments to create many MaintenanceRecords.
     * @example
     * // Create many MaintenanceRecords
     * const maintenanceRecord = await prisma.maintenanceRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceRecordCreateManyArgs>(args?: SelectSubset<T, MaintenanceRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MaintenanceRecord.
     * @param {MaintenanceRecordDeleteArgs} args - Arguments to delete one MaintenanceRecord.
     * @example
     * // Delete one MaintenanceRecord
     * const MaintenanceRecord = await prisma.maintenanceRecord.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceRecord
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceRecordDeleteArgs>(args: SelectSubset<T, MaintenanceRecordDeleteArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceRecord.
     * @param {MaintenanceRecordUpdateArgs} args - Arguments to update one MaintenanceRecord.
     * @example
     * // Update one MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceRecordUpdateArgs>(args: SelectSubset<T, MaintenanceRecordUpdateArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceRecords.
     * @param {MaintenanceRecordDeleteManyArgs} args - Arguments to filter MaintenanceRecords to delete.
     * @example
     * // Delete a few MaintenanceRecords
     * const { count } = await prisma.maintenanceRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceRecordDeleteManyArgs>(args?: SelectSubset<T, MaintenanceRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceRecords
     * const maintenanceRecord = await prisma.maintenanceRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceRecordUpdateManyArgs>(args: SelectSubset<T, MaintenanceRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaintenanceRecord.
     * @param {MaintenanceRecordUpsertArgs} args - Arguments to update or create a MaintenanceRecord.
     * @example
     * // Update or create a MaintenanceRecord
     * const maintenanceRecord = await prisma.maintenanceRecord.upsert({
     *   create: {
     *     // ... data to create a MaintenanceRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceRecord we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceRecordUpsertArgs>(args: SelectSubset<T, MaintenanceRecordUpsertArgs<ExtArgs>>): Prisma__MaintenanceRecordClient<$Result.GetResult<Prisma.$MaintenanceRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordCountArgs} args - Arguments to filter MaintenanceRecords to count.
     * @example
     * // Count the number of MaintenanceRecords
     * const count = await prisma.maintenanceRecord.count({
     *   where: {
     *     // ... the filter for the MaintenanceRecords we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceRecordCountArgs>(
      args?: Subset<T, MaintenanceRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceRecordAggregateArgs>(args: Subset<T, MaintenanceRecordAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceRecordAggregateType<T>>

    /**
     * Group by MaintenanceRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceRecordGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceRecord model
   */
  readonly fields: MaintenanceRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    depot<T extends DepotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepotDefaultArgs<ExtArgs>>): Prisma__DepotClient<$Result.GetResult<Prisma.$DepotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceRecord model
   */
  interface MaintenanceRecordFieldRefs {
    readonly id: FieldRef<"MaintenanceRecord", 'Int'>
    readonly maintenanceId: FieldRef<"MaintenanceRecord", 'String'>
    readonly depotId: FieldRef<"MaintenanceRecord", 'Int'>
    readonly vehicleId: FieldRef<"MaintenanceRecord", 'Int'>
    readonly maintenanceType: FieldRef<"MaintenanceRecord", 'MaintenanceType'>
    readonly serviceDate: FieldRef<"MaintenanceRecord", 'DateTime'>
    readonly nextServiceDate: FieldRef<"MaintenanceRecord", 'DateTime'>
    readonly cost: FieldRef<"MaintenanceRecord", 'Float'>
    readonly remarks: FieldRef<"MaintenanceRecord", 'String'>
    readonly status: FieldRef<"MaintenanceRecord", 'MaintenanceStatus'>
    readonly createdAt: FieldRef<"MaintenanceRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceRecord findUnique
   */
  export type MaintenanceRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord findUniqueOrThrow
   */
  export type MaintenanceRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord findFirst
   */
  export type MaintenanceRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRecords.
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRecords.
     */
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * MaintenanceRecord findFirstOrThrow
   */
  export type MaintenanceRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecord to fetch.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRecords.
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRecords.
     */
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * MaintenanceRecord findMany
   */
  export type MaintenanceRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRecords to fetch.
     */
    where?: MaintenanceRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRecords to fetch.
     */
    orderBy?: MaintenanceRecordOrderByWithRelationInput | MaintenanceRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceRecords.
     */
    cursor?: MaintenanceRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRecords.
     */
    distinct?: MaintenanceRecordScalarFieldEnum | MaintenanceRecordScalarFieldEnum[]
  }

  /**
   * MaintenanceRecord create
   */
  export type MaintenanceRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceRecord.
     */
    data: XOR<MaintenanceRecordCreateInput, MaintenanceRecordUncheckedCreateInput>
  }

  /**
   * MaintenanceRecord createMany
   */
  export type MaintenanceRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceRecords.
     */
    data: MaintenanceRecordCreateManyInput | MaintenanceRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceRecord update
   */
  export type MaintenanceRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceRecord.
     */
    data: XOR<MaintenanceRecordUpdateInput, MaintenanceRecordUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceRecord to update.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord updateMany
   */
  export type MaintenanceRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceRecords.
     */
    data: XOR<MaintenanceRecordUpdateManyMutationInput, MaintenanceRecordUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceRecords to update
     */
    where?: MaintenanceRecordWhereInput
    /**
     * Limit how many MaintenanceRecords to update.
     */
    limit?: number
  }

  /**
   * MaintenanceRecord upsert
   */
  export type MaintenanceRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceRecord to update in case it exists.
     */
    where: MaintenanceRecordWhereUniqueInput
    /**
     * In case the MaintenanceRecord found by the `where` argument doesn't exist, create a new MaintenanceRecord with this data.
     */
    create: XOR<MaintenanceRecordCreateInput, MaintenanceRecordUncheckedCreateInput>
    /**
     * In case the MaintenanceRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceRecordUpdateInput, MaintenanceRecordUncheckedUpdateInput>
  }

  /**
   * MaintenanceRecord delete
   */
  export type MaintenanceRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceRecord to delete.
     */
    where: MaintenanceRecordWhereUniqueInput
  }

  /**
   * MaintenanceRecord deleteMany
   */
  export type MaintenanceRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRecords to delete
     */
    where?: MaintenanceRecordWhereInput
    /**
     * Limit how many MaintenanceRecords to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceRecord without action
   */
  export type MaintenanceRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRecord
     */
    select?: MaintenanceRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRecord
     */
    omit?: MaintenanceRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRecordInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuditLogSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entity: string | null
    entityId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    action: string | null
    entity: string | null
    entityId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    description: number
    createdAt: number
    _all: number
  }


  export type AuditLogAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuditLogSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuditLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuditLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _avg?: AuditLogAvgAggregateInputType
    _sum?: AuditLogSumAggregateInputType
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: number
    userId: number
    action: string
    entity: string
    entityId: string | null
    description: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _avg: AuditLogAvgAggregateOutputType | null
    _sum: AuditLogSumAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>



  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entity" | "entityId" | "description" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      action: string
      entity: string
      entityId: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'Int'>
    readonly userId: FieldRef<"AuditLog", 'Int'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly description: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DepotScalarFieldEnum: {
    id: 'id',
    depotCode: 'depotCode',
    name: 'name',
    code: 'code',
    address: 'address',
    phone: 'phone',
    email: 'email',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type DepotScalarFieldEnum = (typeof DepotScalarFieldEnum)[keyof typeof DepotScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    fullName: 'fullName',
    email: 'email',
    username: 'username',
    password: 'password',
    role: 'role',
    status: 'status',
    depotId: 'depotId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    depotId: 'depotId',
    fullName: 'fullName',
    nic: 'nic',
    phone: 'phone',
    address: 'address',
    licenseNumber: 'licenseNumber',
    licenseExpiry: 'licenseExpiry',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    depotId: 'depotId',
    registrationNumber: 'registrationNumber',
    vehicleType: 'vehicleType',
    seatingCapacity: 'seatingCapacity',
    mileage: 'mileage',
    fuelType: 'fuelType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    depotId: 'depotId',
    routeName: 'routeName',
    startLocation: 'startLocation',
    endLocation: 'endLocation',
    distance: 'distance',
    estimatedDuration: 'estimatedDuration',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const RouteStopScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    stopName: 'stopName',
    stopOrder: 'stopOrder',
    createdAt: 'createdAt'
  };

  export type RouteStopScalarFieldEnum = (typeof RouteStopScalarFieldEnum)[keyof typeof RouteStopScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    scheduleId: 'scheduleId',
    depotId: 'depotId',
    routeId: 'routeId',
    vehicleId: 'vehicleId',
    driverId: 'driverId',
    departureTime: 'departureTime',
    arrivalTime: 'arrivalTime',
    scheduleDate: 'scheduleDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    scheduleId: 'scheduleId',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    remarks: 'remarks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const FuelLogScalarFieldEnum: {
    id: 'id',
    fuelId: 'fuelId',
    depotId: 'depotId',
    vehicleId: 'vehicleId',
    date: 'date',
    liters: 'liters',
    cost: 'cost',
    distanceCovered: 'distanceCovered',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FuelLogScalarFieldEnum = (typeof FuelLogScalarFieldEnum)[keyof typeof FuelLogScalarFieldEnum]


  export const MaintenanceRecordScalarFieldEnum: {
    id: 'id',
    maintenanceId: 'maintenanceId',
    depotId: 'depotId',
    vehicleId: 'vehicleId',
    maintenanceType: 'maintenanceType',
    serviceDate: 'serviceDate',
    nextServiceDate: 'nextServiceDate',
    cost: 'cost',
    remarks: 'remarks',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaintenanceRecordScalarFieldEnum = (typeof MaintenanceRecordScalarFieldEnum)[keyof typeof MaintenanceRecordScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const DepotOrderByRelevanceFieldEnum: {
    depotCode: 'depotCode',
    name: 'name',
    code: 'code',
    address: 'address',
    phone: 'phone',
    email: 'email'
  };

  export type DepotOrderByRelevanceFieldEnum = (typeof DepotOrderByRelevanceFieldEnum)[keyof typeof DepotOrderByRelevanceFieldEnum]


  export const UserOrderByRelevanceFieldEnum: {
    userId: 'userId',
    fullName: 'fullName',
    email: 'email',
    username: 'username',
    password: 'password'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const DriverOrderByRelevanceFieldEnum: {
    driverId: 'driverId',
    fullName: 'fullName',
    nic: 'nic',
    phone: 'phone',
    address: 'address',
    licenseNumber: 'licenseNumber'
  };

  export type DriverOrderByRelevanceFieldEnum = (typeof DriverOrderByRelevanceFieldEnum)[keyof typeof DriverOrderByRelevanceFieldEnum]


  export const VehicleOrderByRelevanceFieldEnum: {
    vehicleId: 'vehicleId',
    registrationNumber: 'registrationNumber'
  };

  export type VehicleOrderByRelevanceFieldEnum = (typeof VehicleOrderByRelevanceFieldEnum)[keyof typeof VehicleOrderByRelevanceFieldEnum]


  export const RouteOrderByRelevanceFieldEnum: {
    routeId: 'routeId',
    routeName: 'routeName',
    startLocation: 'startLocation',
    endLocation: 'endLocation'
  };

  export type RouteOrderByRelevanceFieldEnum = (typeof RouteOrderByRelevanceFieldEnum)[keyof typeof RouteOrderByRelevanceFieldEnum]


  export const RouteStopOrderByRelevanceFieldEnum: {
    stopName: 'stopName'
  };

  export type RouteStopOrderByRelevanceFieldEnum = (typeof RouteStopOrderByRelevanceFieldEnum)[keyof typeof RouteStopOrderByRelevanceFieldEnum]


  export const ScheduleOrderByRelevanceFieldEnum: {
    scheduleId: 'scheduleId'
  };

  export type ScheduleOrderByRelevanceFieldEnum = (typeof ScheduleOrderByRelevanceFieldEnum)[keyof typeof ScheduleOrderByRelevanceFieldEnum]


  export const TripOrderByRelevanceFieldEnum: {
    tripId: 'tripId',
    remarks: 'remarks'
  };

  export type TripOrderByRelevanceFieldEnum = (typeof TripOrderByRelevanceFieldEnum)[keyof typeof TripOrderByRelevanceFieldEnum]


  export const FuelLogOrderByRelevanceFieldEnum: {
    fuelId: 'fuelId'
  };

  export type FuelLogOrderByRelevanceFieldEnum = (typeof FuelLogOrderByRelevanceFieldEnum)[keyof typeof FuelLogOrderByRelevanceFieldEnum]


  export const MaintenanceRecordOrderByRelevanceFieldEnum: {
    maintenanceId: 'maintenanceId',
    remarks: 'remarks'
  };

  export type MaintenanceRecordOrderByRelevanceFieldEnum = (typeof MaintenanceRecordOrderByRelevanceFieldEnum)[keyof typeof MaintenanceRecordOrderByRelevanceFieldEnum]


  export const AuditLogOrderByRelevanceFieldEnum: {
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    description: 'description'
  };

  export type AuditLogOrderByRelevanceFieldEnum = (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'DriverStatus'
   */
  export type EnumDriverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DriverStatus'>
    


  /**
   * Reference to a field of type 'VehicleType'
   */
  export type EnumVehicleTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'FuelType'
   */
  export type EnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'RouteStatus'
   */
  export type EnumRouteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RouteStatus'>
    


  /**
   * Reference to a field of type 'ScheduleStatus'
   */
  export type EnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus'>
    


  /**
   * Reference to a field of type 'TripStatus'
   */
  export type EnumTripStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripStatus'>
    


  /**
   * Reference to a field of type 'MaintenanceType'
   */
  export type EnumMaintenanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceType'>
    


  /**
   * Reference to a field of type 'MaintenanceStatus'
   */
  export type EnumMaintenanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceStatus'>
    
  /**
   * Deep Input Types
   */


  export type DepotWhereInput = {
    AND?: DepotWhereInput | DepotWhereInput[]
    OR?: DepotWhereInput[]
    NOT?: DepotWhereInput | DepotWhereInput[]
    id?: IntFilter<"Depot"> | number
    depotCode?: StringFilter<"Depot"> | string
    name?: StringFilter<"Depot"> | string
    code?: StringFilter<"Depot"> | string
    address?: StringNullableFilter<"Depot"> | string | null
    phone?: StringNullableFilter<"Depot"> | string | null
    email?: StringNullableFilter<"Depot"> | string | null
    isActive?: BoolFilter<"Depot"> | boolean
    createdAt?: DateTimeFilter<"Depot"> | Date | string
    updatedAt?: DateTimeFilter<"Depot"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Depot"> | Date | string | null
    users?: UserListRelationFilter
    drivers?: DriverListRelationFilter
    vehicles?: VehicleListRelationFilter
    routes?: RouteListRelationFilter
    schedules?: ScheduleListRelationFilter
    fuelLogs?: FuelLogListRelationFilter
    maintenances?: MaintenanceRecordListRelationFilter
  }

  export type DepotOrderByWithRelationInput = {
    id?: SortOrder
    depotCode?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    drivers?: DriverOrderByRelationAggregateInput
    vehicles?: VehicleOrderByRelationAggregateInput
    routes?: RouteOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
    fuelLogs?: FuelLogOrderByRelationAggregateInput
    maintenances?: MaintenanceRecordOrderByRelationAggregateInput
    _relevance?: DepotOrderByRelevanceInput
  }

  export type DepotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    depotCode?: string
    code?: string
    AND?: DepotWhereInput | DepotWhereInput[]
    OR?: DepotWhereInput[]
    NOT?: DepotWhereInput | DepotWhereInput[]
    name?: StringFilter<"Depot"> | string
    address?: StringNullableFilter<"Depot"> | string | null
    phone?: StringNullableFilter<"Depot"> | string | null
    email?: StringNullableFilter<"Depot"> | string | null
    isActive?: BoolFilter<"Depot"> | boolean
    createdAt?: DateTimeFilter<"Depot"> | Date | string
    updatedAt?: DateTimeFilter<"Depot"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Depot"> | Date | string | null
    users?: UserListRelationFilter
    drivers?: DriverListRelationFilter
    vehicles?: VehicleListRelationFilter
    routes?: RouteListRelationFilter
    schedules?: ScheduleListRelationFilter
    fuelLogs?: FuelLogListRelationFilter
    maintenances?: MaintenanceRecordListRelationFilter
  }, "id" | "depotCode" | "code">

  export type DepotOrderByWithAggregationInput = {
    id?: SortOrder
    depotCode?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DepotCountOrderByAggregateInput
    _avg?: DepotAvgOrderByAggregateInput
    _max?: DepotMaxOrderByAggregateInput
    _min?: DepotMinOrderByAggregateInput
    _sum?: DepotSumOrderByAggregateInput
  }

  export type DepotScalarWhereWithAggregatesInput = {
    AND?: DepotScalarWhereWithAggregatesInput | DepotScalarWhereWithAggregatesInput[]
    OR?: DepotScalarWhereWithAggregatesInput[]
    NOT?: DepotScalarWhereWithAggregatesInput | DepotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Depot"> | number
    depotCode?: StringWithAggregatesFilter<"Depot"> | string
    name?: StringWithAggregatesFilter<"Depot"> | string
    code?: StringWithAggregatesFilter<"Depot"> | string
    address?: StringNullableWithAggregatesFilter<"Depot"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Depot"> | string | null
    email?: StringNullableWithAggregatesFilter<"Depot"> | string | null
    isActive?: BoolWithAggregatesFilter<"Depot"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Depot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Depot"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Depot"> | Date | string | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    depotId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    depot?: XOR<DepotNullableScalarRelationFilter, DepotWhereInput> | null
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    depotId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    depot?: DepotOrderByWithRelationInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    depotId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    depot?: XOR<DepotNullableScalarRelationFilter, DepotWhereInput> | null
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "userId" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    depotId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userId?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    depotId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: IntFilter<"Driver"> | number
    driverId?: StringFilter<"Driver"> | string
    depotId?: IntFilter<"Driver"> | number
    fullName?: StringFilter<"Driver"> | string
    nic?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    address?: StringNullableFilter<"Driver"> | string | null
    licenseNumber?: StringFilter<"Driver"> | string
    licenseExpiry?: DateTimeFilter<"Driver"> | Date | string
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Driver"> | Date | string | null
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    schedules?: ScheduleListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    driverId?: SortOrder
    depotId?: SortOrder
    fullName?: SortOrder
    nic?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    licenseNumber?: SortOrder
    licenseExpiry?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    depot?: DepotOrderByWithRelationInput
    schedules?: ScheduleOrderByRelationAggregateInput
    _relevance?: DriverOrderByRelevanceInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    driverId?: string
    nic?: string
    licenseNumber?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    depotId?: IntFilter<"Driver"> | number
    fullName?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    address?: StringNullableFilter<"Driver"> | string | null
    licenseExpiry?: DateTimeFilter<"Driver"> | Date | string
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Driver"> | Date | string | null
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    schedules?: ScheduleListRelationFilter
  }, "id" | "driverId" | "nic" | "licenseNumber">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    depotId?: SortOrder
    fullName?: SortOrder
    nic?: SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    licenseNumber?: SortOrder
    licenseExpiry?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Driver"> | number
    driverId?: StringWithAggregatesFilter<"Driver"> | string
    depotId?: IntWithAggregatesFilter<"Driver"> | number
    fullName?: StringWithAggregatesFilter<"Driver"> | string
    nic?: StringWithAggregatesFilter<"Driver"> | string
    phone?: StringWithAggregatesFilter<"Driver"> | string
    address?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    licenseNumber?: StringWithAggregatesFilter<"Driver"> | string
    licenseExpiry?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    status?: EnumDriverStatusWithAggregatesFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    vehicleId?: StringFilter<"Vehicle"> | string
    depotId?: IntFilter<"Vehicle"> | number
    registrationNumber?: StringFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    seatingCapacity?: IntFilter<"Vehicle"> | number
    mileage?: FloatFilter<"Vehicle"> | number
    fuelType?: EnumFuelTypeFilter<"Vehicle"> | $Enums.FuelType
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    schedules?: ScheduleListRelationFilter
    fuelLogs?: FuelLogListRelationFilter
    maintenanceRecords?: MaintenanceRecordListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    depotId?: SortOrder
    registrationNumber?: SortOrder
    vehicleType?: SortOrder
    seatingCapacity?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    depot?: DepotOrderByWithRelationInput
    schedules?: ScheduleOrderByRelationAggregateInput
    fuelLogs?: FuelLogOrderByRelationAggregateInput
    maintenanceRecords?: MaintenanceRecordOrderByRelationAggregateInput
    _relevance?: VehicleOrderByRelevanceInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    vehicleId?: string
    registrationNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    depotId?: IntFilter<"Vehicle"> | number
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    seatingCapacity?: IntFilter<"Vehicle"> | number
    mileage?: FloatFilter<"Vehicle"> | number
    fuelType?: EnumFuelTypeFilter<"Vehicle"> | $Enums.FuelType
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    schedules?: ScheduleListRelationFilter
    fuelLogs?: FuelLogListRelationFilter
    maintenanceRecords?: MaintenanceRecordListRelationFilter
  }, "id" | "vehicleId" | "registrationNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    depotId?: SortOrder
    registrationNumber?: SortOrder
    vehicleType?: SortOrder
    seatingCapacity?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehicle"> | number
    vehicleId?: StringWithAggregatesFilter<"Vehicle"> | string
    depotId?: IntWithAggregatesFilter<"Vehicle"> | number
    registrationNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeWithAggregatesFilter<"Vehicle"> | $Enums.VehicleType
    seatingCapacity?: IntWithAggregatesFilter<"Vehicle"> | number
    mileage?: FloatWithAggregatesFilter<"Vehicle"> | number
    fuelType?: EnumFuelTypeWithAggregatesFilter<"Vehicle"> | $Enums.FuelType
    status?: EnumVehicleStatusWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Vehicle"> | Date | string | null
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: IntFilter<"Route"> | number
    routeId?: StringFilter<"Route"> | string
    depotId?: IntFilter<"Route"> | number
    routeName?: StringFilter<"Route"> | string
    startLocation?: StringFilter<"Route"> | string
    endLocation?: StringFilter<"Route"> | string
    distance?: FloatFilter<"Route"> | number
    estimatedDuration?: IntFilter<"Route"> | number
    status?: EnumRouteStatusFilter<"Route"> | $Enums.RouteStatus
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Route"> | Date | string | null
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    stops?: RouteStopListRelationFilter
    schedules?: ScheduleListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    depotId?: SortOrder
    routeName?: SortOrder
    startLocation?: SortOrder
    endLocation?: SortOrder
    distance?: SortOrder
    estimatedDuration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    depot?: DepotOrderByWithRelationInput
    stops?: RouteStopOrderByRelationAggregateInput
    schedules?: ScheduleOrderByRelationAggregateInput
    _relevance?: RouteOrderByRelevanceInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    routeId?: string
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    depotId?: IntFilter<"Route"> | number
    routeName?: StringFilter<"Route"> | string
    startLocation?: StringFilter<"Route"> | string
    endLocation?: StringFilter<"Route"> | string
    distance?: FloatFilter<"Route"> | number
    estimatedDuration?: IntFilter<"Route"> | number
    status?: EnumRouteStatusFilter<"Route"> | $Enums.RouteStatus
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Route"> | Date | string | null
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    stops?: RouteStopListRelationFilter
    schedules?: ScheduleListRelationFilter
  }, "id" | "routeId">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    depotId?: SortOrder
    routeName?: SortOrder
    startLocation?: SortOrder
    endLocation?: SortOrder
    distance?: SortOrder
    estimatedDuration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Route"> | number
    routeId?: StringWithAggregatesFilter<"Route"> | string
    depotId?: IntWithAggregatesFilter<"Route"> | number
    routeName?: StringWithAggregatesFilter<"Route"> | string
    startLocation?: StringWithAggregatesFilter<"Route"> | string
    endLocation?: StringWithAggregatesFilter<"Route"> | string
    distance?: FloatWithAggregatesFilter<"Route"> | number
    estimatedDuration?: IntWithAggregatesFilter<"Route"> | number
    status?: EnumRouteStatusWithAggregatesFilter<"Route"> | $Enums.RouteStatus
    createdAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Route"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Route"> | Date | string | null
  }

  export type RouteStopWhereInput = {
    AND?: RouteStopWhereInput | RouteStopWhereInput[]
    OR?: RouteStopWhereInput[]
    NOT?: RouteStopWhereInput | RouteStopWhereInput[]
    id?: IntFilter<"RouteStop"> | number
    routeId?: IntFilter<"RouteStop"> | number
    stopName?: StringFilter<"RouteStop"> | string
    stopOrder?: IntFilter<"RouteStop"> | number
    createdAt?: DateTimeFilter<"RouteStop"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }

  export type RouteStopOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopName?: SortOrder
    stopOrder?: SortOrder
    createdAt?: SortOrder
    route?: RouteOrderByWithRelationInput
    _relevance?: RouteStopOrderByRelevanceInput
  }

  export type RouteStopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteStopWhereInput | RouteStopWhereInput[]
    OR?: RouteStopWhereInput[]
    NOT?: RouteStopWhereInput | RouteStopWhereInput[]
    routeId?: IntFilter<"RouteStop"> | number
    stopName?: StringFilter<"RouteStop"> | string
    stopOrder?: IntFilter<"RouteStop"> | number
    createdAt?: DateTimeFilter<"RouteStop"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }, "id">

  export type RouteStopOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopName?: SortOrder
    stopOrder?: SortOrder
    createdAt?: SortOrder
    _count?: RouteStopCountOrderByAggregateInput
    _avg?: RouteStopAvgOrderByAggregateInput
    _max?: RouteStopMaxOrderByAggregateInput
    _min?: RouteStopMinOrderByAggregateInput
    _sum?: RouteStopSumOrderByAggregateInput
  }

  export type RouteStopScalarWhereWithAggregatesInput = {
    AND?: RouteStopScalarWhereWithAggregatesInput | RouteStopScalarWhereWithAggregatesInput[]
    OR?: RouteStopScalarWhereWithAggregatesInput[]
    NOT?: RouteStopScalarWhereWithAggregatesInput | RouteStopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RouteStop"> | number
    routeId?: IntWithAggregatesFilter<"RouteStop"> | number
    stopName?: StringWithAggregatesFilter<"RouteStop"> | string
    stopOrder?: IntWithAggregatesFilter<"RouteStop"> | number
    createdAt?: DateTimeWithAggregatesFilter<"RouteStop"> | Date | string
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    scheduleId?: StringFilter<"Schedule"> | string
    depotId?: IntFilter<"Schedule"> | number
    routeId?: IntFilter<"Schedule"> | number
    vehicleId?: IntFilter<"Schedule"> | number
    driverId?: IntFilter<"Schedule"> | number
    departureTime?: DateTimeFilter<"Schedule"> | Date | string
    arrivalTime?: DateTimeFilter<"Schedule"> | Date | string
    scheduleDate?: DateTimeFilter<"Schedule"> | Date | string
    status?: EnumScheduleStatusFilter<"Schedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
    trips?: TripListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    depotId?: SortOrder
    routeId?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    scheduleDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    depot?: DepotOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
    trips?: TripOrderByRelationAggregateInput
    _relevance?: ScheduleOrderByRelevanceInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    scheduleId?: string
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    depotId?: IntFilter<"Schedule"> | number
    routeId?: IntFilter<"Schedule"> | number
    vehicleId?: IntFilter<"Schedule"> | number
    driverId?: IntFilter<"Schedule"> | number
    departureTime?: DateTimeFilter<"Schedule"> | Date | string
    arrivalTime?: DateTimeFilter<"Schedule"> | Date | string
    scheduleDate?: DateTimeFilter<"Schedule"> | Date | string
    status?: EnumScheduleStatusFilter<"Schedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
    trips?: TripListRelationFilter
  }, "id" | "scheduleId">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    depotId?: SortOrder
    routeId?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    scheduleDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    scheduleId?: StringWithAggregatesFilter<"Schedule"> | string
    depotId?: IntWithAggregatesFilter<"Schedule"> | number
    routeId?: IntWithAggregatesFilter<"Schedule"> | number
    vehicleId?: IntWithAggregatesFilter<"Schedule"> | number
    driverId?: IntWithAggregatesFilter<"Schedule"> | number
    departureTime?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    arrivalTime?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    scheduleDate?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    status?: EnumScheduleStatusWithAggregatesFilter<"Schedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Schedule"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: IntFilter<"Trip"> | number
    tripId?: StringFilter<"Trip"> | string
    scheduleId?: IntFilter<"Trip"> | number
    startTime?: DateTimeFilter<"Trip"> | Date | string
    endTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    remarks?: StringNullableFilter<"Trip"> | string | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    tripId?: SortOrder
    scheduleId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
    _relevance?: TripOrderByRelevanceInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tripId?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    scheduleId?: IntFilter<"Trip"> | number
    startTime?: DateTimeFilter<"Trip"> | Date | string
    endTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    remarks?: StringNullableFilter<"Trip"> | string | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id" | "tripId">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    scheduleId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    status?: SortOrder
    remarks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Trip"> | number
    tripId?: StringWithAggregatesFilter<"Trip"> | string
    scheduleId?: IntWithAggregatesFilter<"Trip"> | number
    startTime?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusWithAggregatesFilter<"Trip"> | $Enums.TripStatus
    remarks?: StringNullableWithAggregatesFilter<"Trip"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type FuelLogWhereInput = {
    AND?: FuelLogWhereInput | FuelLogWhereInput[]
    OR?: FuelLogWhereInput[]
    NOT?: FuelLogWhereInput | FuelLogWhereInput[]
    id?: IntFilter<"FuelLog"> | number
    fuelId?: StringFilter<"FuelLog"> | string
    depotId?: IntFilter<"FuelLog"> | number
    vehicleId?: IntFilter<"FuelLog"> | number
    date?: DateTimeFilter<"FuelLog"> | Date | string
    liters?: FloatFilter<"FuelLog"> | number
    cost?: FloatFilter<"FuelLog"> | number
    distanceCovered?: FloatFilter<"FuelLog"> | number
    createdAt?: DateTimeFilter<"FuelLog"> | Date | string
    updatedAt?: DateTimeFilter<"FuelLog"> | Date | string
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type FuelLogOrderByWithRelationInput = {
    id?: SortOrder
    fuelId?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    distanceCovered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    depot?: DepotOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    _relevance?: FuelLogOrderByRelevanceInput
  }

  export type FuelLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    fuelId?: string
    AND?: FuelLogWhereInput | FuelLogWhereInput[]
    OR?: FuelLogWhereInput[]
    NOT?: FuelLogWhereInput | FuelLogWhereInput[]
    depotId?: IntFilter<"FuelLog"> | number
    vehicleId?: IntFilter<"FuelLog"> | number
    date?: DateTimeFilter<"FuelLog"> | Date | string
    liters?: FloatFilter<"FuelLog"> | number
    cost?: FloatFilter<"FuelLog"> | number
    distanceCovered?: FloatFilter<"FuelLog"> | number
    createdAt?: DateTimeFilter<"FuelLog"> | Date | string
    updatedAt?: DateTimeFilter<"FuelLog"> | Date | string
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id" | "fuelId">

  export type FuelLogOrderByWithAggregationInput = {
    id?: SortOrder
    fuelId?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    distanceCovered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FuelLogCountOrderByAggregateInput
    _avg?: FuelLogAvgOrderByAggregateInput
    _max?: FuelLogMaxOrderByAggregateInput
    _min?: FuelLogMinOrderByAggregateInput
    _sum?: FuelLogSumOrderByAggregateInput
  }

  export type FuelLogScalarWhereWithAggregatesInput = {
    AND?: FuelLogScalarWhereWithAggregatesInput | FuelLogScalarWhereWithAggregatesInput[]
    OR?: FuelLogScalarWhereWithAggregatesInput[]
    NOT?: FuelLogScalarWhereWithAggregatesInput | FuelLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FuelLog"> | number
    fuelId?: StringWithAggregatesFilter<"FuelLog"> | string
    depotId?: IntWithAggregatesFilter<"FuelLog"> | number
    vehicleId?: IntWithAggregatesFilter<"FuelLog"> | number
    date?: DateTimeWithAggregatesFilter<"FuelLog"> | Date | string
    liters?: FloatWithAggregatesFilter<"FuelLog"> | number
    cost?: FloatWithAggregatesFilter<"FuelLog"> | number
    distanceCovered?: FloatWithAggregatesFilter<"FuelLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FuelLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FuelLog"> | Date | string
  }

  export type MaintenanceRecordWhereInput = {
    AND?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    OR?: MaintenanceRecordWhereInput[]
    NOT?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    id?: IntFilter<"MaintenanceRecord"> | number
    maintenanceId?: StringFilter<"MaintenanceRecord"> | string
    depotId?: IntFilter<"MaintenanceRecord"> | number
    vehicleId?: IntFilter<"MaintenanceRecord"> | number
    maintenanceType?: EnumMaintenanceTypeFilter<"MaintenanceRecord"> | $Enums.MaintenanceType
    serviceDate?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    nextServiceDate?: DateTimeNullableFilter<"MaintenanceRecord"> | Date | string | null
    cost?: FloatFilter<"MaintenanceRecord"> | number
    remarks?: StringNullableFilter<"MaintenanceRecord"> | string | null
    status?: EnumMaintenanceStatusFilter<"MaintenanceRecord"> | $Enums.MaintenanceStatus
    createdAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type MaintenanceRecordOrderByWithRelationInput = {
    id?: SortOrder
    maintenanceId?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    maintenanceType?: SortOrder
    serviceDate?: SortOrder
    nextServiceDate?: SortOrderInput | SortOrder
    cost?: SortOrder
    remarks?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    depot?: DepotOrderByWithRelationInput
    vehicle?: VehicleOrderByWithRelationInput
    _relevance?: MaintenanceRecordOrderByRelevanceInput
  }

  export type MaintenanceRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    maintenanceId?: string
    AND?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    OR?: MaintenanceRecordWhereInput[]
    NOT?: MaintenanceRecordWhereInput | MaintenanceRecordWhereInput[]
    depotId?: IntFilter<"MaintenanceRecord"> | number
    vehicleId?: IntFilter<"MaintenanceRecord"> | number
    maintenanceType?: EnumMaintenanceTypeFilter<"MaintenanceRecord"> | $Enums.MaintenanceType
    serviceDate?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    nextServiceDate?: DateTimeNullableFilter<"MaintenanceRecord"> | Date | string | null
    cost?: FloatFilter<"MaintenanceRecord"> | number
    remarks?: StringNullableFilter<"MaintenanceRecord"> | string | null
    status?: EnumMaintenanceStatusFilter<"MaintenanceRecord"> | $Enums.MaintenanceStatus
    createdAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    depot?: XOR<DepotScalarRelationFilter, DepotWhereInput>
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id" | "maintenanceId">

  export type MaintenanceRecordOrderByWithAggregationInput = {
    id?: SortOrder
    maintenanceId?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    maintenanceType?: SortOrder
    serviceDate?: SortOrder
    nextServiceDate?: SortOrderInput | SortOrder
    cost?: SortOrder
    remarks?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaintenanceRecordCountOrderByAggregateInput
    _avg?: MaintenanceRecordAvgOrderByAggregateInput
    _max?: MaintenanceRecordMaxOrderByAggregateInput
    _min?: MaintenanceRecordMinOrderByAggregateInput
    _sum?: MaintenanceRecordSumOrderByAggregateInput
  }

  export type MaintenanceRecordScalarWhereWithAggregatesInput = {
    AND?: MaintenanceRecordScalarWhereWithAggregatesInput | MaintenanceRecordScalarWhereWithAggregatesInput[]
    OR?: MaintenanceRecordScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceRecordScalarWhereWithAggregatesInput | MaintenanceRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaintenanceRecord"> | number
    maintenanceId?: StringWithAggregatesFilter<"MaintenanceRecord"> | string
    depotId?: IntWithAggregatesFilter<"MaintenanceRecord"> | number
    vehicleId?: IntWithAggregatesFilter<"MaintenanceRecord"> | number
    maintenanceType?: EnumMaintenanceTypeWithAggregatesFilter<"MaintenanceRecord"> | $Enums.MaintenanceType
    serviceDate?: DateTimeWithAggregatesFilter<"MaintenanceRecord"> | Date | string
    nextServiceDate?: DateTimeNullableWithAggregatesFilter<"MaintenanceRecord"> | Date | string | null
    cost?: FloatWithAggregatesFilter<"MaintenanceRecord"> | number
    remarks?: StringNullableWithAggregatesFilter<"MaintenanceRecord"> | string | null
    status?: EnumMaintenanceStatusWithAggregatesFilter<"MaintenanceRecord"> | $Enums.MaintenanceStatus
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceRecord"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    userId?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AuditLogOrderByRelevanceInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _avg?: AuditLogAvgOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
    _sum?: AuditLogSumOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuditLog"> | number
    userId?: IntWithAggregatesFilter<"AuditLog"> | number
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    description?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type DepotCreateInput = {
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutDepotInput
    drivers?: DriverCreateNestedManyWithoutDepotInput
    vehicles?: VehicleCreateNestedManyWithoutDepotInput
    routes?: RouteCreateNestedManyWithoutDepotInput
    schedules?: ScheduleCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordCreateNestedManyWithoutDepotInput
  }

  export type DepotUncheckedCreateInput = {
    id?: number
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutDepotInput
    drivers?: DriverUncheckedCreateNestedManyWithoutDepotInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutDepotInput
    routes?: RouteUncheckedCreateNestedManyWithoutDepotInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordUncheckedCreateNestedManyWithoutDepotInput
  }

  export type DepotUpdateInput = {
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutDepotNestedInput
    drivers?: DriverUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUpdateManyWithoutDepotNestedInput
    routes?: RouteUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUpdateManyWithoutDepotNestedInput
  }

  export type DepotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutDepotNestedInput
    drivers?: DriverUncheckedUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutDepotNestedInput
    routes?: RouteUncheckedUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUncheckedUpdateManyWithoutDepotNestedInput
  }

  export type DepotCreateManyInput = {
    id?: number
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DepotUpdateManyMutationInput = {
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DepotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateInput = {
    userId?: string
    fullName: string
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot?: DepotCreateNestedOneWithoutUsersInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userId?: string
    fullName: string
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    depotId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneWithoutUsersNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    depotId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    userId?: string
    fullName: string
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    depotId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    depotId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverCreateInput = {
    driverId?: string
    fullName: string
    nic: string
    phone: string
    address?: string | null
    licenseNumber: string
    licenseExpiry: Date | string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot: DepotCreateNestedOneWithoutDriversInput
    schedules?: ScheduleCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: number
    driverId?: string
    depotId: number
    fullName: string
    nic: string
    phone: string
    address?: string | null
    licenseNumber: string
    licenseExpiry: Date | string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneRequiredWithoutDriversNestedInput
    schedules?: ScheduleUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: ScheduleUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: number
    driverId?: string
    depotId: number
    fullName: string
    nic: string
    phone: string
    address?: string | null
    licenseNumber: string
    licenseExpiry: Date | string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DriverUpdateManyMutationInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleCreateInput = {
    vehicleId?: string
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot: DepotCreateNestedOneWithoutVehiclesInput
    schedules?: ScheduleCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogCreateNestedManyWithoutVehicleInput
    maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: number
    vehicleId?: string
    depotId: number
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    schedules?: ScheduleUncheckedCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceRecords?: MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneRequiredWithoutVehiclesNestedInput
    schedules?: ScheduleUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutVehicleNestedInput
    maintenanceRecords?: MaintenanceRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: ScheduleUncheckedUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceRecords?: MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: number
    vehicleId?: string
    depotId: number
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VehicleUpdateManyMutationInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RouteCreateInput = {
    routeId?: string
    routeName: string
    startLocation: string
    endLocation: string
    distance?: number
    estimatedDuration?: number
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot: DepotCreateNestedOneWithoutRoutesInput
    stops?: RouteStopCreateNestedManyWithoutRouteInput
    schedules?: ScheduleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: number
    routeId?: string
    depotId: number
    routeName: string
    startLocation: string
    endLocation: string
    distance?: number
    estimatedDuration?: number
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stops?: RouteStopUncheckedCreateNestedManyWithoutRouteInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    routeId?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneRequiredWithoutRoutesNestedInput
    stops?: RouteStopUpdateManyWithoutRouteNestedInput
    schedules?: ScheduleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stops?: RouteStopUncheckedUpdateManyWithoutRouteNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: number
    routeId?: string
    depotId: number
    routeName: string
    startLocation: string
    endLocation: string
    distance?: number
    estimatedDuration?: number
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RouteUpdateManyMutationInput = {
    routeId?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RouteStopCreateInput = {
    stopName: string
    stopOrder: number
    createdAt?: Date | string
    route: RouteCreateNestedOneWithoutStopsInput
  }

  export type RouteStopUncheckedCreateInput = {
    id?: number
    routeId: number
    stopName: string
    stopOrder: number
    createdAt?: Date | string
  }

  export type RouteStopUpdateInput = {
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutStopsNestedInput
  }

  export type RouteStopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteStopCreateManyInput = {
    id?: number
    routeId: number
    stopName: string
    stopOrder: number
    createdAt?: Date | string
  }

  export type RouteStopUpdateManyMutationInput = {
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteStopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateInput = {
    scheduleId?: string
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    depot: DepotCreateNestedOneWithoutSchedulesInput
    route: RouteCreateNestedOneWithoutSchedulesInput
    vehicle: VehicleCreateNestedOneWithoutSchedulesInput
    driver: DriverCreateNestedOneWithoutSchedulesInput
    trips?: TripCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    scheduleId?: string
    depotId: number
    routeId: number
    vehicleId: number
    driverId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depot?: DepotUpdateOneRequiredWithoutSchedulesNestedInput
    route?: RouteUpdateOneRequiredWithoutSchedulesNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutSchedulesNestedInput
    driver?: DriverUpdateOneRequiredWithoutSchedulesNestedInput
    trips?: TripUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: number
    scheduleId?: string
    depotId: number
    routeId: number
    vehicleId: number
    driverId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateManyMutationInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    tripId?: string
    startTime: Date | string
    endTime?: Date | string | null
    status?: $Enums.TripStatus
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedule: ScheduleCreateNestedOneWithoutTripsInput
  }

  export type TripUncheckedCreateInput = {
    id?: number
    tripId?: string
    scheduleId: number
    startTime: Date | string
    endTime?: Date | string | null
    status?: $Enums.TripStatus
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateInput = {
    tripId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedule?: ScheduleUpdateOneRequiredWithoutTripsNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: StringFieldUpdateOperationsInput | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyInput = {
    id?: number
    tripId?: string
    scheduleId: number
    startTime: Date | string
    endTime?: Date | string | null
    status?: $Enums.TripStatus
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    tripId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: StringFieldUpdateOperationsInput | string
    scheduleId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogCreateInput = {
    fuelId?: string
    date: Date | string
    liters: number
    cost: number
    distanceCovered: number
    createdAt?: Date | string
    updatedAt?: Date | string
    depot: DepotCreateNestedOneWithoutFuelLogsInput
    vehicle: VehicleCreateNestedOneWithoutFuelLogsInput
  }

  export type FuelLogUncheckedCreateInput = {
    id?: number
    fuelId?: string
    depotId: number
    vehicleId: number
    date: Date | string
    liters: number
    cost: number
    distanceCovered: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelLogUpdateInput = {
    fuelId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    distanceCovered?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depot?: DepotUpdateOneRequiredWithoutFuelLogsNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutFuelLogsNestedInput
  }

  export type FuelLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fuelId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    distanceCovered?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogCreateManyInput = {
    id?: number
    fuelId?: string
    depotId: number
    vehicleId: number
    date: Date | string
    liters: number
    cost: number
    distanceCovered: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelLogUpdateManyMutationInput = {
    fuelId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    distanceCovered?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fuelId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    distanceCovered?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordCreateInput = {
    maintenanceId?: string
    maintenanceType: $Enums.MaintenanceType
    serviceDate: Date | string
    nextServiceDate?: Date | string | null
    cost: number
    remarks?: string | null
    status?: $Enums.MaintenanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    depot: DepotCreateNestedOneWithoutMaintenancesInput
    vehicle: VehicleCreateNestedOneWithoutMaintenanceRecordsInput
  }

  export type MaintenanceRecordUncheckedCreateInput = {
    id?: number
    maintenanceId?: string
    depotId: number
    vehicleId: number
    maintenanceType: $Enums.MaintenanceType
    serviceDate: Date | string
    nextServiceDate?: Date | string | null
    cost: number
    remarks?: string | null
    status?: $Enums.MaintenanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordUpdateInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    maintenanceType?: EnumMaintenanceTypeFieldUpdateOperationsInput | $Enums.MaintenanceType
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextServiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depot?: DepotUpdateOneRequiredWithoutMaintenancesNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceRecordsNestedInput
  }

  export type MaintenanceRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    maintenanceId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: EnumMaintenanceTypeFieldUpdateOperationsInput | $Enums.MaintenanceType
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextServiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordCreateManyInput = {
    id?: number
    maintenanceId?: string
    depotId: number
    vehicleId: number
    maintenanceType: $Enums.MaintenanceType
    serviceDate: Date | string
    nextServiceDate?: Date | string | null
    cost: number
    remarks?: string | null
    status?: $Enums.MaintenanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordUpdateManyMutationInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    maintenanceType?: EnumMaintenanceTypeFieldUpdateOperationsInput | $Enums.MaintenanceType
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextServiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    maintenanceId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: EnumMaintenanceTypeFieldUpdateOperationsInput | $Enums.MaintenanceType
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextServiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: number
    userId: number
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: number
    userId: number
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DriverListRelationFilter = {
    every?: DriverWhereInput
    some?: DriverWhereInput
    none?: DriverWhereInput
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type RouteListRelationFilter = {
    every?: RouteWhereInput
    some?: RouteWhereInput
    none?: RouteWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type FuelLogListRelationFilter = {
    every?: FuelLogWhereInput
    some?: FuelLogWhereInput
    none?: FuelLogWhereInput
  }

  export type MaintenanceRecordListRelationFilter = {
    every?: MaintenanceRecordWhereInput
    some?: MaintenanceRecordWhereInput
    none?: MaintenanceRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuelLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepotOrderByRelevanceInput = {
    fields: DepotOrderByRelevanceFieldEnum | DepotOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DepotCountOrderByAggregateInput = {
    id?: SortOrder
    depotCode?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepotAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DepotMaxOrderByAggregateInput = {
    id?: SortOrder
    depotCode?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepotMinOrderByAggregateInput = {
    id?: SortOrder
    depotCode?: SortOrder
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DepotSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DepotNullableScalarRelationFilter = {
    is?: DepotWhereInput | null
    isNot?: DepotWhereInput | null
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    depotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    depotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    depotId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumDriverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[]
    notIn?: $Enums.DriverStatus[]
    not?: NestedEnumDriverStatusFilter<$PrismaModel> | $Enums.DriverStatus
  }

  export type DepotScalarRelationFilter = {
    is?: DepotWhereInput
    isNot?: DepotWhereInput
  }

  export type DriverOrderByRelevanceInput = {
    fields: DriverOrderByRelevanceFieldEnum | DriverOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    depotId?: SortOrder
    fullName?: SortOrder
    nic?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    licenseNumber?: SortOrder
    licenseExpiry?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    depotId?: SortOrder
    fullName?: SortOrder
    nic?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    licenseNumber?: SortOrder
    licenseExpiry?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    depotId?: SortOrder
    fullName?: SortOrder
    nic?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    licenseNumber?: SortOrder
    licenseExpiry?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
  }

  export type EnumDriverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[]
    notIn?: $Enums.DriverStatus[]
    not?: NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel> | $Enums.DriverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriverStatusFilter<$PrismaModel>
    _max?: NestedEnumDriverStatusFilter<$PrismaModel>
  }

  export type EnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[]
    notIn?: $Enums.VehicleType[]
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[]
    notIn?: $Enums.FuelType[]
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType
  }

  export type EnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[]
    notIn?: $Enums.VehicleStatus[]
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type VehicleOrderByRelevanceInput = {
    fields: VehicleOrderByRelevanceFieldEnum | VehicleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    depotId?: SortOrder
    registrationNumber?: SortOrder
    vehicleType?: SortOrder
    seatingCapacity?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
    seatingCapacity?: SortOrder
    mileage?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    depotId?: SortOrder
    registrationNumber?: SortOrder
    vehicleType?: SortOrder
    seatingCapacity?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    depotId?: SortOrder
    registrationNumber?: SortOrder
    vehicleType?: SortOrder
    seatingCapacity?: SortOrder
    mileage?: SortOrder
    fuelType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
    seatingCapacity?: SortOrder
    mileage?: SortOrder
  }

  export type EnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[]
    notIn?: $Enums.VehicleType[]
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[]
    notIn?: $Enums.FuelType[]
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeFilter<$PrismaModel>
  }

  export type EnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[]
    notIn?: $Enums.VehicleStatus[]
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type EnumRouteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RouteStatus | EnumRouteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RouteStatus[]
    notIn?: $Enums.RouteStatus[]
    not?: NestedEnumRouteStatusFilter<$PrismaModel> | $Enums.RouteStatus
  }

  export type RouteStopListRelationFilter = {
    every?: RouteStopWhereInput
    some?: RouteStopWhereInput
    none?: RouteStopWhereInput
  }

  export type RouteStopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteOrderByRelevanceInput = {
    fields: RouteOrderByRelevanceFieldEnum | RouteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    depotId?: SortOrder
    routeName?: SortOrder
    startLocation?: SortOrder
    endLocation?: SortOrder
    distance?: SortOrder
    estimatedDuration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
    distance?: SortOrder
    estimatedDuration?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    depotId?: SortOrder
    routeName?: SortOrder
    startLocation?: SortOrder
    endLocation?: SortOrder
    distance?: SortOrder
    estimatedDuration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    depotId?: SortOrder
    routeName?: SortOrder
    startLocation?: SortOrder
    endLocation?: SortOrder
    distance?: SortOrder
    estimatedDuration?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
    distance?: SortOrder
    estimatedDuration?: SortOrder
  }

  export type EnumRouteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RouteStatus | EnumRouteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RouteStatus[]
    notIn?: $Enums.RouteStatus[]
    not?: NestedEnumRouteStatusWithAggregatesFilter<$PrismaModel> | $Enums.RouteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRouteStatusFilter<$PrismaModel>
    _max?: NestedEnumRouteStatusFilter<$PrismaModel>
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type RouteStopOrderByRelevanceInput = {
    fields: RouteStopOrderByRelevanceFieldEnum | RouteStopOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RouteStopCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopName?: SortOrder
    stopOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteStopAvgOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopOrder?: SortOrder
  }

  export type RouteStopMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopName?: SortOrder
    stopOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteStopMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopName?: SortOrder
    stopOrder?: SortOrder
    createdAt?: SortOrder
  }

  export type RouteStopSumOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopOrder?: SortOrder
  }

  export type EnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[]
    notIn?: $Enums.ScheduleStatus[]
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type DriverScalarRelationFilter = {
    is?: DriverWhereInput
    isNot?: DriverWhereInput
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelevanceInput = {
    fields: ScheduleOrderByRelevanceFieldEnum | ScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    depotId?: SortOrder
    routeId?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    scheduleDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
    routeId?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    depotId?: SortOrder
    routeId?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    scheduleDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
    depotId?: SortOrder
    routeId?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    scheduleDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
    routeId?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
  }

  export type EnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[]
    notIn?: $Enums.ScheduleStatus[]
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type EnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[]
    notIn?: $Enums.TripStatus[]
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type TripOrderByRelevanceInput = {
    fields: TripOrderByRelevanceFieldEnum | TripOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    scheduleId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    scheduleId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    scheduleId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    remarks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    id?: SortOrder
    scheduleId?: SortOrder
  }

  export type EnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[]
    notIn?: $Enums.TripStatus[]
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type FuelLogOrderByRelevanceInput = {
    fields: FuelLogOrderByRelevanceFieldEnum | FuelLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FuelLogCountOrderByAggregateInput = {
    id?: SortOrder
    fuelId?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    distanceCovered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuelLogAvgOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    distanceCovered?: SortOrder
  }

  export type FuelLogMaxOrderByAggregateInput = {
    id?: SortOrder
    fuelId?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    distanceCovered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuelLogMinOrderByAggregateInput = {
    id?: SortOrder
    fuelId?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    date?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    distanceCovered?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FuelLogSumOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    distanceCovered?: SortOrder
  }

  export type EnumMaintenanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceType | EnumMaintenanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceType[]
    notIn?: $Enums.MaintenanceType[]
    not?: NestedEnumMaintenanceTypeFilter<$PrismaModel> | $Enums.MaintenanceType
  }

  export type EnumMaintenanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[]
    notIn?: $Enums.MaintenanceStatus[]
    not?: NestedEnumMaintenanceStatusFilter<$PrismaModel> | $Enums.MaintenanceStatus
  }

  export type MaintenanceRecordOrderByRelevanceInput = {
    fields: MaintenanceRecordOrderByRelevanceFieldEnum | MaintenanceRecordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MaintenanceRecordCountOrderByAggregateInput = {
    id?: SortOrder
    maintenanceId?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    maintenanceType?: SortOrder
    serviceDate?: SortOrder
    nextServiceDate?: SortOrder
    cost?: SortOrder
    remarks?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    cost?: SortOrder
  }

  export type MaintenanceRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    maintenanceId?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    maintenanceType?: SortOrder
    serviceDate?: SortOrder
    nextServiceDate?: SortOrder
    cost?: SortOrder
    remarks?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRecordMinOrderByAggregateInput = {
    id?: SortOrder
    maintenanceId?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    maintenanceType?: SortOrder
    serviceDate?: SortOrder
    nextServiceDate?: SortOrder
    cost?: SortOrder
    remarks?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceRecordSumOrderByAggregateInput = {
    id?: SortOrder
    depotId?: SortOrder
    vehicleId?: SortOrder
    cost?: SortOrder
  }

  export type EnumMaintenanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceType | EnumMaintenanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceType[]
    notIn?: $Enums.MaintenanceType[]
    not?: NestedEnumMaintenanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceTypeFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceTypeFilter<$PrismaModel>
  }

  export type EnumMaintenanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[]
    notIn?: $Enums.MaintenanceStatus[]
    not?: NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AuditLogOrderByRelevanceInput = {
    fields: AuditLogOrderByRelevanceFieldEnum | AuditLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateNestedManyWithoutDepotInput = {
    create?: XOR<UserCreateWithoutDepotInput, UserUncheckedCreateWithoutDepotInput> | UserCreateWithoutDepotInput[] | UserUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepotInput | UserCreateOrConnectWithoutDepotInput[]
    createMany?: UserCreateManyDepotInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DriverCreateNestedManyWithoutDepotInput = {
    create?: XOR<DriverCreateWithoutDepotInput, DriverUncheckedCreateWithoutDepotInput> | DriverCreateWithoutDepotInput[] | DriverUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutDepotInput | DriverCreateOrConnectWithoutDepotInput[]
    createMany?: DriverCreateManyDepotInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type VehicleCreateNestedManyWithoutDepotInput = {
    create?: XOR<VehicleCreateWithoutDepotInput, VehicleUncheckedCreateWithoutDepotInput> | VehicleCreateWithoutDepotInput[] | VehicleUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutDepotInput | VehicleCreateOrConnectWithoutDepotInput[]
    createMany?: VehicleCreateManyDepotInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type RouteCreateNestedManyWithoutDepotInput = {
    create?: XOR<RouteCreateWithoutDepotInput, RouteUncheckedCreateWithoutDepotInput> | RouteCreateWithoutDepotInput[] | RouteUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDepotInput | RouteCreateOrConnectWithoutDepotInput[]
    createMany?: RouteCreateManyDepotInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutDepotInput = {
    create?: XOR<ScheduleCreateWithoutDepotInput, ScheduleUncheckedCreateWithoutDepotInput> | ScheduleCreateWithoutDepotInput[] | ScheduleUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDepotInput | ScheduleCreateOrConnectWithoutDepotInput[]
    createMany?: ScheduleCreateManyDepotInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type FuelLogCreateNestedManyWithoutDepotInput = {
    create?: XOR<FuelLogCreateWithoutDepotInput, FuelLogUncheckedCreateWithoutDepotInput> | FuelLogCreateWithoutDepotInput[] | FuelLogUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutDepotInput | FuelLogCreateOrConnectWithoutDepotInput[]
    createMany?: FuelLogCreateManyDepotInputEnvelope
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
  }

  export type MaintenanceRecordCreateNestedManyWithoutDepotInput = {
    create?: XOR<MaintenanceRecordCreateWithoutDepotInput, MaintenanceRecordUncheckedCreateWithoutDepotInput> | MaintenanceRecordCreateWithoutDepotInput[] | MaintenanceRecordUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutDepotInput | MaintenanceRecordCreateOrConnectWithoutDepotInput[]
    createMany?: MaintenanceRecordCreateManyDepotInputEnvelope
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepotInput = {
    create?: XOR<UserCreateWithoutDepotInput, UserUncheckedCreateWithoutDepotInput> | UserCreateWithoutDepotInput[] | UserUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepotInput | UserCreateOrConnectWithoutDepotInput[]
    createMany?: UserCreateManyDepotInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DriverUncheckedCreateNestedManyWithoutDepotInput = {
    create?: XOR<DriverCreateWithoutDepotInput, DriverUncheckedCreateWithoutDepotInput> | DriverCreateWithoutDepotInput[] | DriverUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutDepotInput | DriverCreateOrConnectWithoutDepotInput[]
    createMany?: DriverCreateManyDepotInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutDepotInput = {
    create?: XOR<VehicleCreateWithoutDepotInput, VehicleUncheckedCreateWithoutDepotInput> | VehicleCreateWithoutDepotInput[] | VehicleUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutDepotInput | VehicleCreateOrConnectWithoutDepotInput[]
    createMany?: VehicleCreateManyDepotInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type RouteUncheckedCreateNestedManyWithoutDepotInput = {
    create?: XOR<RouteCreateWithoutDepotInput, RouteUncheckedCreateWithoutDepotInput> | RouteCreateWithoutDepotInput[] | RouteUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDepotInput | RouteCreateOrConnectWithoutDepotInput[]
    createMany?: RouteCreateManyDepotInputEnvelope
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutDepotInput = {
    create?: XOR<ScheduleCreateWithoutDepotInput, ScheduleUncheckedCreateWithoutDepotInput> | ScheduleCreateWithoutDepotInput[] | ScheduleUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDepotInput | ScheduleCreateOrConnectWithoutDepotInput[]
    createMany?: ScheduleCreateManyDepotInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type FuelLogUncheckedCreateNestedManyWithoutDepotInput = {
    create?: XOR<FuelLogCreateWithoutDepotInput, FuelLogUncheckedCreateWithoutDepotInput> | FuelLogCreateWithoutDepotInput[] | FuelLogUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutDepotInput | FuelLogCreateOrConnectWithoutDepotInput[]
    createMany?: FuelLogCreateManyDepotInputEnvelope
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
  }

  export type MaintenanceRecordUncheckedCreateNestedManyWithoutDepotInput = {
    create?: XOR<MaintenanceRecordCreateWithoutDepotInput, MaintenanceRecordUncheckedCreateWithoutDepotInput> | MaintenanceRecordCreateWithoutDepotInput[] | MaintenanceRecordUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutDepotInput | MaintenanceRecordCreateOrConnectWithoutDepotInput[]
    createMany?: MaintenanceRecordCreateManyDepotInputEnvelope
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateManyWithoutDepotNestedInput = {
    create?: XOR<UserCreateWithoutDepotInput, UserUncheckedCreateWithoutDepotInput> | UserCreateWithoutDepotInput[] | UserUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepotInput | UserCreateOrConnectWithoutDepotInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepotInput | UserUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: UserCreateManyDepotInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepotInput | UserUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepotInput | UserUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DriverUpdateManyWithoutDepotNestedInput = {
    create?: XOR<DriverCreateWithoutDepotInput, DriverUncheckedCreateWithoutDepotInput> | DriverCreateWithoutDepotInput[] | DriverUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutDepotInput | DriverCreateOrConnectWithoutDepotInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutDepotInput | DriverUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: DriverCreateManyDepotInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutDepotInput | DriverUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutDepotInput | DriverUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type VehicleUpdateManyWithoutDepotNestedInput = {
    create?: XOR<VehicleCreateWithoutDepotInput, VehicleUncheckedCreateWithoutDepotInput> | VehicleCreateWithoutDepotInput[] | VehicleUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutDepotInput | VehicleCreateOrConnectWithoutDepotInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutDepotInput | VehicleUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: VehicleCreateManyDepotInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutDepotInput | VehicleUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutDepotInput | VehicleUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type RouteUpdateManyWithoutDepotNestedInput = {
    create?: XOR<RouteCreateWithoutDepotInput, RouteUncheckedCreateWithoutDepotInput> | RouteCreateWithoutDepotInput[] | RouteUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDepotInput | RouteCreateOrConnectWithoutDepotInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutDepotInput | RouteUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: RouteCreateManyDepotInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutDepotInput | RouteUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutDepotInput | RouteUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutDepotNestedInput = {
    create?: XOR<ScheduleCreateWithoutDepotInput, ScheduleUncheckedCreateWithoutDepotInput> | ScheduleCreateWithoutDepotInput[] | ScheduleUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDepotInput | ScheduleCreateOrConnectWithoutDepotInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutDepotInput | ScheduleUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: ScheduleCreateManyDepotInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutDepotInput | ScheduleUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutDepotInput | ScheduleUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type FuelLogUpdateManyWithoutDepotNestedInput = {
    create?: XOR<FuelLogCreateWithoutDepotInput, FuelLogUncheckedCreateWithoutDepotInput> | FuelLogCreateWithoutDepotInput[] | FuelLogUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutDepotInput | FuelLogCreateOrConnectWithoutDepotInput[]
    upsert?: FuelLogUpsertWithWhereUniqueWithoutDepotInput | FuelLogUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: FuelLogCreateManyDepotInputEnvelope
    set?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    disconnect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    delete?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    update?: FuelLogUpdateWithWhereUniqueWithoutDepotInput | FuelLogUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: FuelLogUpdateManyWithWhereWithoutDepotInput | FuelLogUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
  }

  export type MaintenanceRecordUpdateManyWithoutDepotNestedInput = {
    create?: XOR<MaintenanceRecordCreateWithoutDepotInput, MaintenanceRecordUncheckedCreateWithoutDepotInput> | MaintenanceRecordCreateWithoutDepotInput[] | MaintenanceRecordUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutDepotInput | MaintenanceRecordCreateOrConnectWithoutDepotInput[]
    upsert?: MaintenanceRecordUpsertWithWhereUniqueWithoutDepotInput | MaintenanceRecordUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: MaintenanceRecordCreateManyDepotInputEnvelope
    set?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    disconnect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    delete?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    update?: MaintenanceRecordUpdateWithWhereUniqueWithoutDepotInput | MaintenanceRecordUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: MaintenanceRecordUpdateManyWithWhereWithoutDepotInput | MaintenanceRecordUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutDepotNestedInput = {
    create?: XOR<UserCreateWithoutDepotInput, UserUncheckedCreateWithoutDepotInput> | UserCreateWithoutDepotInput[] | UserUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepotInput | UserCreateOrConnectWithoutDepotInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepotInput | UserUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: UserCreateManyDepotInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepotInput | UserUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepotInput | UserUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DriverUncheckedUpdateManyWithoutDepotNestedInput = {
    create?: XOR<DriverCreateWithoutDepotInput, DriverUncheckedCreateWithoutDepotInput> | DriverCreateWithoutDepotInput[] | DriverUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutDepotInput | DriverCreateOrConnectWithoutDepotInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutDepotInput | DriverUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: DriverCreateManyDepotInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutDepotInput | DriverUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutDepotInput | DriverUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutDepotNestedInput = {
    create?: XOR<VehicleCreateWithoutDepotInput, VehicleUncheckedCreateWithoutDepotInput> | VehicleCreateWithoutDepotInput[] | VehicleUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutDepotInput | VehicleCreateOrConnectWithoutDepotInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutDepotInput | VehicleUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: VehicleCreateManyDepotInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutDepotInput | VehicleUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutDepotInput | VehicleUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type RouteUncheckedUpdateManyWithoutDepotNestedInput = {
    create?: XOR<RouteCreateWithoutDepotInput, RouteUncheckedCreateWithoutDepotInput> | RouteCreateWithoutDepotInput[] | RouteUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: RouteCreateOrConnectWithoutDepotInput | RouteCreateOrConnectWithoutDepotInput[]
    upsert?: RouteUpsertWithWhereUniqueWithoutDepotInput | RouteUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: RouteCreateManyDepotInputEnvelope
    set?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    disconnect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    delete?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    connect?: RouteWhereUniqueInput | RouteWhereUniqueInput[]
    update?: RouteUpdateWithWhereUniqueWithoutDepotInput | RouteUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: RouteUpdateManyWithWhereWithoutDepotInput | RouteUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: RouteScalarWhereInput | RouteScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutDepotNestedInput = {
    create?: XOR<ScheduleCreateWithoutDepotInput, ScheduleUncheckedCreateWithoutDepotInput> | ScheduleCreateWithoutDepotInput[] | ScheduleUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDepotInput | ScheduleCreateOrConnectWithoutDepotInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutDepotInput | ScheduleUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: ScheduleCreateManyDepotInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutDepotInput | ScheduleUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutDepotInput | ScheduleUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type FuelLogUncheckedUpdateManyWithoutDepotNestedInput = {
    create?: XOR<FuelLogCreateWithoutDepotInput, FuelLogUncheckedCreateWithoutDepotInput> | FuelLogCreateWithoutDepotInput[] | FuelLogUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutDepotInput | FuelLogCreateOrConnectWithoutDepotInput[]
    upsert?: FuelLogUpsertWithWhereUniqueWithoutDepotInput | FuelLogUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: FuelLogCreateManyDepotInputEnvelope
    set?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    disconnect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    delete?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    update?: FuelLogUpdateWithWhereUniqueWithoutDepotInput | FuelLogUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: FuelLogUpdateManyWithWhereWithoutDepotInput | FuelLogUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
  }

  export type MaintenanceRecordUncheckedUpdateManyWithoutDepotNestedInput = {
    create?: XOR<MaintenanceRecordCreateWithoutDepotInput, MaintenanceRecordUncheckedCreateWithoutDepotInput> | MaintenanceRecordCreateWithoutDepotInput[] | MaintenanceRecordUncheckedCreateWithoutDepotInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutDepotInput | MaintenanceRecordCreateOrConnectWithoutDepotInput[]
    upsert?: MaintenanceRecordUpsertWithWhereUniqueWithoutDepotInput | MaintenanceRecordUpsertWithWhereUniqueWithoutDepotInput[]
    createMany?: MaintenanceRecordCreateManyDepotInputEnvelope
    set?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    disconnect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    delete?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    update?: MaintenanceRecordUpdateWithWhereUniqueWithoutDepotInput | MaintenanceRecordUpdateWithWhereUniqueWithoutDepotInput[]
    updateMany?: MaintenanceRecordUpdateManyWithWhereWithoutDepotInput | MaintenanceRecordUpdateManyWithWhereWithoutDepotInput[]
    deleteMany?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
  }

  export type DepotCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepotCreateWithoutUsersInput, DepotUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepotCreateOrConnectWithoutUsersInput
    connect?: DepotWhereUniqueInput
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DepotUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DepotCreateWithoutUsersInput, DepotUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepotCreateOrConnectWithoutUsersInput
    upsert?: DepotUpsertWithoutUsersInput
    disconnect?: DepotWhereInput | boolean
    delete?: DepotWhereInput | boolean
    connect?: DepotWhereUniqueInput
    update?: XOR<XOR<DepotUpdateToOneWithWhereWithoutUsersInput, DepotUpdateWithoutUsersInput>, DepotUncheckedUpdateWithoutUsersInput>
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type DepotCreateNestedOneWithoutDriversInput = {
    create?: XOR<DepotCreateWithoutDriversInput, DepotUncheckedCreateWithoutDriversInput>
    connectOrCreate?: DepotCreateOrConnectWithoutDriversInput
    connect?: DepotWhereUniqueInput
  }

  export type ScheduleCreateNestedManyWithoutDriverInput = {
    create?: XOR<ScheduleCreateWithoutDriverInput, ScheduleUncheckedCreateWithoutDriverInput> | ScheduleCreateWithoutDriverInput[] | ScheduleUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDriverInput | ScheduleCreateOrConnectWithoutDriverInput[]
    createMany?: ScheduleCreateManyDriverInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<ScheduleCreateWithoutDriverInput, ScheduleUncheckedCreateWithoutDriverInput> | ScheduleCreateWithoutDriverInput[] | ScheduleUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDriverInput | ScheduleCreateOrConnectWithoutDriverInput[]
    createMany?: ScheduleCreateManyDriverInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type EnumDriverStatusFieldUpdateOperationsInput = {
    set?: $Enums.DriverStatus
  }

  export type DepotUpdateOneRequiredWithoutDriversNestedInput = {
    create?: XOR<DepotCreateWithoutDriversInput, DepotUncheckedCreateWithoutDriversInput>
    connectOrCreate?: DepotCreateOrConnectWithoutDriversInput
    upsert?: DepotUpsertWithoutDriversInput
    connect?: DepotWhereUniqueInput
    update?: XOR<XOR<DepotUpdateToOneWithWhereWithoutDriversInput, DepotUpdateWithoutDriversInput>, DepotUncheckedUpdateWithoutDriversInput>
  }

  export type ScheduleUpdateManyWithoutDriverNestedInput = {
    create?: XOR<ScheduleCreateWithoutDriverInput, ScheduleUncheckedCreateWithoutDriverInput> | ScheduleCreateWithoutDriverInput[] | ScheduleUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDriverInput | ScheduleCreateOrConnectWithoutDriverInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutDriverInput | ScheduleUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: ScheduleCreateManyDriverInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutDriverInput | ScheduleUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutDriverInput | ScheduleUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<ScheduleCreateWithoutDriverInput, ScheduleUncheckedCreateWithoutDriverInput> | ScheduleCreateWithoutDriverInput[] | ScheduleUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutDriverInput | ScheduleCreateOrConnectWithoutDriverInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutDriverInput | ScheduleUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: ScheduleCreateManyDriverInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutDriverInput | ScheduleUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutDriverInput | ScheduleUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type DepotCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<DepotCreateWithoutVehiclesInput, DepotUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: DepotCreateOrConnectWithoutVehiclesInput
    connect?: DepotWhereUniqueInput
  }

  export type ScheduleCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ScheduleCreateWithoutVehicleInput, ScheduleUncheckedCreateWithoutVehicleInput> | ScheduleCreateWithoutVehicleInput[] | ScheduleUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutVehicleInput | ScheduleCreateOrConnectWithoutVehicleInput[]
    createMany?: ScheduleCreateManyVehicleInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type FuelLogCreateNestedManyWithoutVehicleInput = {
    create?: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput> | FuelLogCreateWithoutVehicleInput[] | FuelLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutVehicleInput | FuelLogCreateOrConnectWithoutVehicleInput[]
    createMany?: FuelLogCreateManyVehicleInputEnvelope
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
  }

  export type MaintenanceRecordCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ScheduleCreateWithoutVehicleInput, ScheduleUncheckedCreateWithoutVehicleInput> | ScheduleCreateWithoutVehicleInput[] | ScheduleUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutVehicleInput | ScheduleCreateOrConnectWithoutVehicleInput[]
    createMany?: ScheduleCreateManyVehicleInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type FuelLogUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput> | FuelLogCreateWithoutVehicleInput[] | FuelLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutVehicleInput | FuelLogCreateOrConnectWithoutVehicleInput[]
    createMany?: FuelLogCreateManyVehicleInputEnvelope
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
  }

  export type MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
  }

  export type EnumVehicleTypeFieldUpdateOperationsInput = {
    set?: $Enums.VehicleType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFuelTypeFieldUpdateOperationsInput = {
    set?: $Enums.FuelType
  }

  export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus
  }

  export type DepotUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<DepotCreateWithoutVehiclesInput, DepotUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: DepotCreateOrConnectWithoutVehiclesInput
    upsert?: DepotUpsertWithoutVehiclesInput
    connect?: DepotWhereUniqueInput
    update?: XOR<XOR<DepotUpdateToOneWithWhereWithoutVehiclesInput, DepotUpdateWithoutVehiclesInput>, DepotUncheckedUpdateWithoutVehiclesInput>
  }

  export type ScheduleUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ScheduleCreateWithoutVehicleInput, ScheduleUncheckedCreateWithoutVehicleInput> | ScheduleCreateWithoutVehicleInput[] | ScheduleUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutVehicleInput | ScheduleCreateOrConnectWithoutVehicleInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutVehicleInput | ScheduleUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ScheduleCreateManyVehicleInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutVehicleInput | ScheduleUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutVehicleInput | ScheduleUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type FuelLogUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput> | FuelLogCreateWithoutVehicleInput[] | FuelLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutVehicleInput | FuelLogCreateOrConnectWithoutVehicleInput[]
    upsert?: FuelLogUpsertWithWhereUniqueWithoutVehicleInput | FuelLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: FuelLogCreateManyVehicleInputEnvelope
    set?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    disconnect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    delete?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    update?: FuelLogUpdateWithWhereUniqueWithoutVehicleInput | FuelLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: FuelLogUpdateManyWithWhereWithoutVehicleInput | FuelLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
  }

  export type MaintenanceRecordUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    set?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    disconnect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    delete?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    update?: MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput | MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ScheduleCreateWithoutVehicleInput, ScheduleUncheckedCreateWithoutVehicleInput> | ScheduleCreateWithoutVehicleInput[] | ScheduleUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutVehicleInput | ScheduleCreateOrConnectWithoutVehicleInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutVehicleInput | ScheduleUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ScheduleCreateManyVehicleInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutVehicleInput | ScheduleUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutVehicleInput | ScheduleUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type FuelLogUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput> | FuelLogCreateWithoutVehicleInput[] | FuelLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutVehicleInput | FuelLogCreateOrConnectWithoutVehicleInput[]
    upsert?: FuelLogUpsertWithWhereUniqueWithoutVehicleInput | FuelLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: FuelLogCreateManyVehicleInputEnvelope
    set?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    disconnect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    delete?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    update?: FuelLogUpdateWithWhereUniqueWithoutVehicleInput | FuelLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: FuelLogUpdateManyWithWhereWithoutVehicleInput | FuelLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
  }

  export type MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput> | MaintenanceRecordCreateWithoutVehicleInput[] | MaintenanceRecordUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceRecordCreateOrConnectWithoutVehicleInput | MaintenanceRecordCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceRecordCreateManyVehicleInputEnvelope
    set?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    disconnect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    delete?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    connect?: MaintenanceRecordWhereUniqueInput | MaintenanceRecordWhereUniqueInput[]
    update?: MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput | MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
  }

  export type DepotCreateNestedOneWithoutRoutesInput = {
    create?: XOR<DepotCreateWithoutRoutesInput, DepotUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: DepotCreateOrConnectWithoutRoutesInput
    connect?: DepotWhereUniqueInput
  }

  export type RouteStopCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput> | RouteStopCreateWithoutRouteInput[] | RouteStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutRouteInput | RouteStopCreateOrConnectWithoutRouteInput[]
    createMany?: RouteStopCreateManyRouteInputEnvelope
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
  }

  export type ScheduleCreateNestedManyWithoutRouteInput = {
    create?: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput> | ScheduleCreateWithoutRouteInput[] | ScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRouteInput | ScheduleCreateOrConnectWithoutRouteInput[]
    createMany?: ScheduleCreateManyRouteInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type RouteStopUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput> | RouteStopCreateWithoutRouteInput[] | RouteStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutRouteInput | RouteStopCreateOrConnectWithoutRouteInput[]
    createMany?: RouteStopCreateManyRouteInputEnvelope
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput> | ScheduleCreateWithoutRouteInput[] | ScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRouteInput | ScheduleCreateOrConnectWithoutRouteInput[]
    createMany?: ScheduleCreateManyRouteInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type EnumRouteStatusFieldUpdateOperationsInput = {
    set?: $Enums.RouteStatus
  }

  export type DepotUpdateOneRequiredWithoutRoutesNestedInput = {
    create?: XOR<DepotCreateWithoutRoutesInput, DepotUncheckedCreateWithoutRoutesInput>
    connectOrCreate?: DepotCreateOrConnectWithoutRoutesInput
    upsert?: DepotUpsertWithoutRoutesInput
    connect?: DepotWhereUniqueInput
    update?: XOR<XOR<DepotUpdateToOneWithWhereWithoutRoutesInput, DepotUpdateWithoutRoutesInput>, DepotUncheckedUpdateWithoutRoutesInput>
  }

  export type RouteStopUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput> | RouteStopCreateWithoutRouteInput[] | RouteStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutRouteInput | RouteStopCreateOrConnectWithoutRouteInput[]
    upsert?: RouteStopUpsertWithWhereUniqueWithoutRouteInput | RouteStopUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteStopCreateManyRouteInputEnvelope
    set?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    disconnect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    delete?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    update?: RouteStopUpdateWithWhereUniqueWithoutRouteInput | RouteStopUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteStopUpdateManyWithWhereWithoutRouteInput | RouteStopUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteStopScalarWhereInput | RouteStopScalarWhereInput[]
  }

  export type ScheduleUpdateManyWithoutRouteNestedInput = {
    create?: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput> | ScheduleCreateWithoutRouteInput[] | ScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRouteInput | ScheduleCreateOrConnectWithoutRouteInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutRouteInput | ScheduleUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: ScheduleCreateManyRouteInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutRouteInput | ScheduleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutRouteInput | ScheduleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type RouteStopUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput> | RouteStopCreateWithoutRouteInput[] | RouteStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutRouteInput | RouteStopCreateOrConnectWithoutRouteInput[]
    upsert?: RouteStopUpsertWithWhereUniqueWithoutRouteInput | RouteStopUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteStopCreateManyRouteInputEnvelope
    set?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    disconnect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    delete?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    update?: RouteStopUpdateWithWhereUniqueWithoutRouteInput | RouteStopUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteStopUpdateManyWithWhereWithoutRouteInput | RouteStopUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteStopScalarWhereInput | RouteStopScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput> | ScheduleCreateWithoutRouteInput[] | ScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutRouteInput | ScheduleCreateOrConnectWithoutRouteInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutRouteInput | ScheduleUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: ScheduleCreateManyRouteInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutRouteInput | ScheduleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutRouteInput | ScheduleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutStopsInput = {
    create?: XOR<RouteCreateWithoutStopsInput, RouteUncheckedCreateWithoutStopsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutStopsInput
    connect?: RouteWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutStopsNestedInput = {
    create?: XOR<RouteCreateWithoutStopsInput, RouteUncheckedCreateWithoutStopsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutStopsInput
    upsert?: RouteUpsertWithoutStopsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutStopsInput, RouteUpdateWithoutStopsInput>, RouteUncheckedUpdateWithoutStopsInput>
  }

  export type DepotCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<DepotCreateWithoutSchedulesInput, DepotUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DepotCreateOrConnectWithoutSchedulesInput
    connect?: DepotWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutSchedulesInput
    connect?: RouteWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<VehicleCreateWithoutSchedulesInput, VehicleUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSchedulesInput
    connect?: VehicleWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<DriverCreateWithoutSchedulesInput, DriverUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutSchedulesInput
    connect?: DriverWhereUniqueInput
  }

  export type TripCreateNestedManyWithoutScheduleInput = {
    create?: XOR<TripCreateWithoutScheduleInput, TripUncheckedCreateWithoutScheduleInput> | TripCreateWithoutScheduleInput[] | TripUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutScheduleInput | TripCreateOrConnectWithoutScheduleInput[]
    createMany?: TripCreateManyScheduleInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<TripCreateWithoutScheduleInput, TripUncheckedCreateWithoutScheduleInput> | TripCreateWithoutScheduleInput[] | TripUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutScheduleInput | TripCreateOrConnectWithoutScheduleInput[]
    createMany?: TripCreateManyScheduleInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type EnumScheduleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleStatus
  }

  export type DepotUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<DepotCreateWithoutSchedulesInput, DepotUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DepotCreateOrConnectWithoutSchedulesInput
    upsert?: DepotUpsertWithoutSchedulesInput
    connect?: DepotWhereUniqueInput
    update?: XOR<XOR<DepotUpdateToOneWithWhereWithoutSchedulesInput, DepotUpdateWithoutSchedulesInput>, DepotUncheckedUpdateWithoutSchedulesInput>
  }

  export type RouteUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutSchedulesInput
    upsert?: RouteUpsertWithoutSchedulesInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutSchedulesInput, RouteUpdateWithoutSchedulesInput>, RouteUncheckedUpdateWithoutSchedulesInput>
  }

  export type VehicleUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<VehicleCreateWithoutSchedulesInput, VehicleUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutSchedulesInput
    upsert?: VehicleUpsertWithoutSchedulesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutSchedulesInput, VehicleUpdateWithoutSchedulesInput>, VehicleUncheckedUpdateWithoutSchedulesInput>
  }

  export type DriverUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<DriverCreateWithoutSchedulesInput, DriverUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DriverCreateOrConnectWithoutSchedulesInput
    upsert?: DriverUpsertWithoutSchedulesInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutSchedulesInput, DriverUpdateWithoutSchedulesInput>, DriverUncheckedUpdateWithoutSchedulesInput>
  }

  export type TripUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<TripCreateWithoutScheduleInput, TripUncheckedCreateWithoutScheduleInput> | TripCreateWithoutScheduleInput[] | TripUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutScheduleInput | TripCreateOrConnectWithoutScheduleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutScheduleInput | TripUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: TripCreateManyScheduleInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutScheduleInput | TripUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutScheduleInput | TripUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<TripCreateWithoutScheduleInput, TripUncheckedCreateWithoutScheduleInput> | TripCreateWithoutScheduleInput[] | TripUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutScheduleInput | TripCreateOrConnectWithoutScheduleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutScheduleInput | TripUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: TripCreateManyScheduleInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutScheduleInput | TripUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutScheduleInput | TripUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type ScheduleCreateNestedOneWithoutTripsInput = {
    create?: XOR<ScheduleCreateWithoutTripsInput, ScheduleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutTripsInput
    connect?: ScheduleWhereUniqueInput
  }

  export type EnumTripStatusFieldUpdateOperationsInput = {
    set?: $Enums.TripStatus
  }

  export type ScheduleUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<ScheduleCreateWithoutTripsInput, ScheduleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutTripsInput
    upsert?: ScheduleUpsertWithoutTripsInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutTripsInput, ScheduleUpdateWithoutTripsInput>, ScheduleUncheckedUpdateWithoutTripsInput>
  }

  export type DepotCreateNestedOneWithoutFuelLogsInput = {
    create?: XOR<DepotCreateWithoutFuelLogsInput, DepotUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: DepotCreateOrConnectWithoutFuelLogsInput
    connect?: DepotWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutFuelLogsInput = {
    create?: XOR<VehicleCreateWithoutFuelLogsInput, VehicleUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutFuelLogsInput
    connect?: VehicleWhereUniqueInput
  }

  export type DepotUpdateOneRequiredWithoutFuelLogsNestedInput = {
    create?: XOR<DepotCreateWithoutFuelLogsInput, DepotUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: DepotCreateOrConnectWithoutFuelLogsInput
    upsert?: DepotUpsertWithoutFuelLogsInput
    connect?: DepotWhereUniqueInput
    update?: XOR<XOR<DepotUpdateToOneWithWhereWithoutFuelLogsInput, DepotUpdateWithoutFuelLogsInput>, DepotUncheckedUpdateWithoutFuelLogsInput>
  }

  export type VehicleUpdateOneRequiredWithoutFuelLogsNestedInput = {
    create?: XOR<VehicleCreateWithoutFuelLogsInput, VehicleUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutFuelLogsInput
    upsert?: VehicleUpsertWithoutFuelLogsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutFuelLogsInput, VehicleUpdateWithoutFuelLogsInput>, VehicleUncheckedUpdateWithoutFuelLogsInput>
  }

  export type DepotCreateNestedOneWithoutMaintenancesInput = {
    create?: XOR<DepotCreateWithoutMaintenancesInput, DepotUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: DepotCreateOrConnectWithoutMaintenancesInput
    connect?: DepotWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutMaintenanceRecordsInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceRecordsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumMaintenanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.MaintenanceType
  }

  export type EnumMaintenanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaintenanceStatus
  }

  export type DepotUpdateOneRequiredWithoutMaintenancesNestedInput = {
    create?: XOR<DepotCreateWithoutMaintenancesInput, DepotUncheckedCreateWithoutMaintenancesInput>
    connectOrCreate?: DepotCreateOrConnectWithoutMaintenancesInput
    upsert?: DepotUpsertWithoutMaintenancesInput
    connect?: DepotWhereUniqueInput
    update?: XOR<XOR<DepotUpdateToOneWithWhereWithoutMaintenancesInput, DepotUpdateWithoutMaintenancesInput>, DepotUncheckedUpdateWithoutMaintenancesInput>
  }

  export type VehicleUpdateOneRequiredWithoutMaintenanceRecordsNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceRecordsInput
    upsert?: VehicleUpsertWithoutMaintenanceRecordsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenanceRecordsInput, VehicleUpdateWithoutMaintenanceRecordsInput>, VehicleUncheckedUpdateWithoutMaintenanceRecordsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[]
    notIn?: $Enums.UserStatus[]
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDriverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[]
    notIn?: $Enums.DriverStatus[]
    not?: NestedEnumDriverStatusFilter<$PrismaModel> | $Enums.DriverStatus
  }

  export type NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[]
    notIn?: $Enums.DriverStatus[]
    not?: NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel> | $Enums.DriverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriverStatusFilter<$PrismaModel>
    _max?: NestedEnumDriverStatusFilter<$PrismaModel>
  }

  export type NestedEnumVehicleTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[]
    notIn?: $Enums.VehicleType[]
    not?: NestedEnumVehicleTypeFilter<$PrismaModel> | $Enums.VehicleType
  }

  export type NestedEnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[]
    notIn?: $Enums.FuelType[]
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType
  }

  export type NestedEnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[]
    notIn?: $Enums.VehicleStatus[]
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleType | EnumVehicleTypeFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleType[]
    notIn?: $Enums.VehicleType[]
    not?: NestedEnumVehicleTypeWithAggregatesFilter<$PrismaModel> | $Enums.VehicleType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleTypeFilter<$PrismaModel>
    _max?: NestedEnumVehicleTypeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FuelType[]
    notIn?: $Enums.FuelType[]
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFuelTypeFilter<$PrismaModel>
    _max?: NestedEnumFuelTypeFilter<$PrismaModel>
  }

  export type NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[]
    notIn?: $Enums.VehicleStatus[]
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type NestedEnumRouteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RouteStatus | EnumRouteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RouteStatus[]
    notIn?: $Enums.RouteStatus[]
    not?: NestedEnumRouteStatusFilter<$PrismaModel> | $Enums.RouteStatus
  }

  export type NestedEnumRouteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RouteStatus | EnumRouteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RouteStatus[]
    notIn?: $Enums.RouteStatus[]
    not?: NestedEnumRouteStatusWithAggregatesFilter<$PrismaModel> | $Enums.RouteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRouteStatusFilter<$PrismaModel>
    _max?: NestedEnumRouteStatusFilter<$PrismaModel>
  }

  export type NestedEnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[]
    notIn?: $Enums.ScheduleStatus[]
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[]
    notIn?: $Enums.ScheduleStatus[]
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type NestedEnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[]
    notIn?: $Enums.TripStatus[]
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type NestedEnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[]
    notIn?: $Enums.TripStatus[]
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type NestedEnumMaintenanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceType | EnumMaintenanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceType[]
    notIn?: $Enums.MaintenanceType[]
    not?: NestedEnumMaintenanceTypeFilter<$PrismaModel> | $Enums.MaintenanceType
  }

  export type NestedEnumMaintenanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[]
    notIn?: $Enums.MaintenanceStatus[]
    not?: NestedEnumMaintenanceStatusFilter<$PrismaModel> | $Enums.MaintenanceStatus
  }

  export type NestedEnumMaintenanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceType | EnumMaintenanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceType[]
    notIn?: $Enums.MaintenanceType[]
    not?: NestedEnumMaintenanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceTypeFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceTypeFilter<$PrismaModel>
  }

  export type NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[]
    notIn?: $Enums.MaintenanceStatus[]
    not?: NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutDepotInput = {
    userId?: string
    fullName: string
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepotInput = {
    id?: number
    userId?: string
    fullName: string
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepotInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepotInput, UserUncheckedCreateWithoutDepotInput>
  }

  export type UserCreateManyDepotInputEnvelope = {
    data: UserCreateManyDepotInput | UserCreateManyDepotInput[]
    skipDuplicates?: boolean
  }

  export type DriverCreateWithoutDepotInput = {
    driverId?: string
    fullName: string
    nic: string
    phone: string
    address?: string | null
    licenseNumber: string
    licenseExpiry: Date | string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    schedules?: ScheduleCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutDepotInput = {
    id?: number
    driverId?: string
    fullName: string
    nic: string
    phone: string
    address?: string | null
    licenseNumber: string
    licenseExpiry: Date | string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutDepotInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutDepotInput, DriverUncheckedCreateWithoutDepotInput>
  }

  export type DriverCreateManyDepotInputEnvelope = {
    data: DriverCreateManyDepotInput | DriverCreateManyDepotInput[]
    skipDuplicates?: boolean
  }

  export type VehicleCreateWithoutDepotInput = {
    vehicleId?: string
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    schedules?: ScheduleCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogCreateNestedManyWithoutVehicleInput
    maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutDepotInput = {
    id?: number
    vehicleId?: string
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    schedules?: ScheduleUncheckedCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceRecords?: MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutDepotInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDepotInput, VehicleUncheckedCreateWithoutDepotInput>
  }

  export type VehicleCreateManyDepotInputEnvelope = {
    data: VehicleCreateManyDepotInput | VehicleCreateManyDepotInput[]
    skipDuplicates?: boolean
  }

  export type RouteCreateWithoutDepotInput = {
    routeId?: string
    routeName: string
    startLocation: string
    endLocation: string
    distance?: number
    estimatedDuration?: number
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stops?: RouteStopCreateNestedManyWithoutRouteInput
    schedules?: ScheduleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutDepotInput = {
    id?: number
    routeId?: string
    routeName: string
    startLocation: string
    endLocation: string
    distance?: number
    estimatedDuration?: number
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stops?: RouteStopUncheckedCreateNestedManyWithoutRouteInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutDepotInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutDepotInput, RouteUncheckedCreateWithoutDepotInput>
  }

  export type RouteCreateManyDepotInputEnvelope = {
    data: RouteCreateManyDepotInput | RouteCreateManyDepotInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutDepotInput = {
    scheduleId?: string
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    route: RouteCreateNestedOneWithoutSchedulesInput
    vehicle: VehicleCreateNestedOneWithoutSchedulesInput
    driver: DriverCreateNestedOneWithoutSchedulesInput
    trips?: TripCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutDepotInput = {
    id?: number
    scheduleId?: string
    routeId: number
    vehicleId: number
    driverId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutDepotInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutDepotInput, ScheduleUncheckedCreateWithoutDepotInput>
  }

  export type ScheduleCreateManyDepotInputEnvelope = {
    data: ScheduleCreateManyDepotInput | ScheduleCreateManyDepotInput[]
    skipDuplicates?: boolean
  }

  export type FuelLogCreateWithoutDepotInput = {
    fuelId?: string
    date: Date | string
    liters: number
    cost: number
    distanceCovered: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutFuelLogsInput
  }

  export type FuelLogUncheckedCreateWithoutDepotInput = {
    id?: number
    fuelId?: string
    vehicleId: number
    date: Date | string
    liters: number
    cost: number
    distanceCovered: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelLogCreateOrConnectWithoutDepotInput = {
    where: FuelLogWhereUniqueInput
    create: XOR<FuelLogCreateWithoutDepotInput, FuelLogUncheckedCreateWithoutDepotInput>
  }

  export type FuelLogCreateManyDepotInputEnvelope = {
    data: FuelLogCreateManyDepotInput | FuelLogCreateManyDepotInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRecordCreateWithoutDepotInput = {
    maintenanceId?: string
    maintenanceType: $Enums.MaintenanceType
    serviceDate: Date | string
    nextServiceDate?: Date | string | null
    cost: number
    remarks?: string | null
    status?: $Enums.MaintenanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenanceRecordsInput
  }

  export type MaintenanceRecordUncheckedCreateWithoutDepotInput = {
    id?: number
    maintenanceId?: string
    vehicleId: number
    maintenanceType: $Enums.MaintenanceType
    serviceDate: Date | string
    nextServiceDate?: Date | string | null
    cost: number
    remarks?: string | null
    status?: $Enums.MaintenanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordCreateOrConnectWithoutDepotInput = {
    where: MaintenanceRecordWhereUniqueInput
    create: XOR<MaintenanceRecordCreateWithoutDepotInput, MaintenanceRecordUncheckedCreateWithoutDepotInput>
  }

  export type MaintenanceRecordCreateManyDepotInputEnvelope = {
    data: MaintenanceRecordCreateManyDepotInput | MaintenanceRecordCreateManyDepotInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDepotInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepotInput, UserUncheckedUpdateWithoutDepotInput>
    create: XOR<UserCreateWithoutDepotInput, UserUncheckedCreateWithoutDepotInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepotInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepotInput, UserUncheckedUpdateWithoutDepotInput>
  }

  export type UserUpdateManyWithWhereWithoutDepotInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepotInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    depotId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type DriverUpsertWithWhereUniqueWithoutDepotInput = {
    where: DriverWhereUniqueInput
    update: XOR<DriverUpdateWithoutDepotInput, DriverUncheckedUpdateWithoutDepotInput>
    create: XOR<DriverCreateWithoutDepotInput, DriverUncheckedCreateWithoutDepotInput>
  }

  export type DriverUpdateWithWhereUniqueWithoutDepotInput = {
    where: DriverWhereUniqueInput
    data: XOR<DriverUpdateWithoutDepotInput, DriverUncheckedUpdateWithoutDepotInput>
  }

  export type DriverUpdateManyWithWhereWithoutDepotInput = {
    where: DriverScalarWhereInput
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyWithoutDepotInput>
  }

  export type DriverScalarWhereInput = {
    AND?: DriverScalarWhereInput | DriverScalarWhereInput[]
    OR?: DriverScalarWhereInput[]
    NOT?: DriverScalarWhereInput | DriverScalarWhereInput[]
    id?: IntFilter<"Driver"> | number
    driverId?: StringFilter<"Driver"> | string
    depotId?: IntFilter<"Driver"> | number
    fullName?: StringFilter<"Driver"> | string
    nic?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    address?: StringNullableFilter<"Driver"> | string | null
    licenseNumber?: StringFilter<"Driver"> | string
    licenseExpiry?: DateTimeFilter<"Driver"> | Date | string
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Driver"> | Date | string | null
  }

  export type VehicleUpsertWithWhereUniqueWithoutDepotInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutDepotInput, VehicleUncheckedUpdateWithoutDepotInput>
    create: XOR<VehicleCreateWithoutDepotInput, VehicleUncheckedCreateWithoutDepotInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutDepotInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutDepotInput, VehicleUncheckedUpdateWithoutDepotInput>
  }

  export type VehicleUpdateManyWithWhereWithoutDepotInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutDepotInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: IntFilter<"Vehicle"> | number
    vehicleId?: StringFilter<"Vehicle"> | string
    depotId?: IntFilter<"Vehicle"> | number
    registrationNumber?: StringFilter<"Vehicle"> | string
    vehicleType?: EnumVehicleTypeFilter<"Vehicle"> | $Enums.VehicleType
    seatingCapacity?: IntFilter<"Vehicle"> | number
    mileage?: FloatFilter<"Vehicle"> | number
    fuelType?: EnumFuelTypeFilter<"Vehicle"> | $Enums.FuelType
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Vehicle"> | Date | string | null
  }

  export type RouteUpsertWithWhereUniqueWithoutDepotInput = {
    where: RouteWhereUniqueInput
    update: XOR<RouteUpdateWithoutDepotInput, RouteUncheckedUpdateWithoutDepotInput>
    create: XOR<RouteCreateWithoutDepotInput, RouteUncheckedCreateWithoutDepotInput>
  }

  export type RouteUpdateWithWhereUniqueWithoutDepotInput = {
    where: RouteWhereUniqueInput
    data: XOR<RouteUpdateWithoutDepotInput, RouteUncheckedUpdateWithoutDepotInput>
  }

  export type RouteUpdateManyWithWhereWithoutDepotInput = {
    where: RouteScalarWhereInput
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyWithoutDepotInput>
  }

  export type RouteScalarWhereInput = {
    AND?: RouteScalarWhereInput | RouteScalarWhereInput[]
    OR?: RouteScalarWhereInput[]
    NOT?: RouteScalarWhereInput | RouteScalarWhereInput[]
    id?: IntFilter<"Route"> | number
    routeId?: StringFilter<"Route"> | string
    depotId?: IntFilter<"Route"> | number
    routeName?: StringFilter<"Route"> | string
    startLocation?: StringFilter<"Route"> | string
    endLocation?: StringFilter<"Route"> | string
    distance?: FloatFilter<"Route"> | number
    estimatedDuration?: IntFilter<"Route"> | number
    status?: EnumRouteStatusFilter<"Route"> | $Enums.RouteStatus
    createdAt?: DateTimeFilter<"Route"> | Date | string
    updatedAt?: DateTimeFilter<"Route"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Route"> | Date | string | null
  }

  export type ScheduleUpsertWithWhereUniqueWithoutDepotInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutDepotInput, ScheduleUncheckedUpdateWithoutDepotInput>
    create: XOR<ScheduleCreateWithoutDepotInput, ScheduleUncheckedCreateWithoutDepotInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutDepotInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutDepotInput, ScheduleUncheckedUpdateWithoutDepotInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutDepotInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutDepotInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: IntFilter<"Schedule"> | number
    scheduleId?: StringFilter<"Schedule"> | string
    depotId?: IntFilter<"Schedule"> | number
    routeId?: IntFilter<"Schedule"> | number
    vehicleId?: IntFilter<"Schedule"> | number
    driverId?: IntFilter<"Schedule"> | number
    departureTime?: DateTimeFilter<"Schedule"> | Date | string
    arrivalTime?: DateTimeFilter<"Schedule"> | Date | string
    scheduleDate?: DateTimeFilter<"Schedule"> | Date | string
    status?: EnumScheduleStatusFilter<"Schedule"> | $Enums.ScheduleStatus
    createdAt?: DateTimeFilter<"Schedule"> | Date | string
    updatedAt?: DateTimeFilter<"Schedule"> | Date | string
  }

  export type FuelLogUpsertWithWhereUniqueWithoutDepotInput = {
    where: FuelLogWhereUniqueInput
    update: XOR<FuelLogUpdateWithoutDepotInput, FuelLogUncheckedUpdateWithoutDepotInput>
    create: XOR<FuelLogCreateWithoutDepotInput, FuelLogUncheckedCreateWithoutDepotInput>
  }

  export type FuelLogUpdateWithWhereUniqueWithoutDepotInput = {
    where: FuelLogWhereUniqueInput
    data: XOR<FuelLogUpdateWithoutDepotInput, FuelLogUncheckedUpdateWithoutDepotInput>
  }

  export type FuelLogUpdateManyWithWhereWithoutDepotInput = {
    where: FuelLogScalarWhereInput
    data: XOR<FuelLogUpdateManyMutationInput, FuelLogUncheckedUpdateManyWithoutDepotInput>
  }

  export type FuelLogScalarWhereInput = {
    AND?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
    OR?: FuelLogScalarWhereInput[]
    NOT?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
    id?: IntFilter<"FuelLog"> | number
    fuelId?: StringFilter<"FuelLog"> | string
    depotId?: IntFilter<"FuelLog"> | number
    vehicleId?: IntFilter<"FuelLog"> | number
    date?: DateTimeFilter<"FuelLog"> | Date | string
    liters?: FloatFilter<"FuelLog"> | number
    cost?: FloatFilter<"FuelLog"> | number
    distanceCovered?: FloatFilter<"FuelLog"> | number
    createdAt?: DateTimeFilter<"FuelLog"> | Date | string
    updatedAt?: DateTimeFilter<"FuelLog"> | Date | string
  }

  export type MaintenanceRecordUpsertWithWhereUniqueWithoutDepotInput = {
    where: MaintenanceRecordWhereUniqueInput
    update: XOR<MaintenanceRecordUpdateWithoutDepotInput, MaintenanceRecordUncheckedUpdateWithoutDepotInput>
    create: XOR<MaintenanceRecordCreateWithoutDepotInput, MaintenanceRecordUncheckedCreateWithoutDepotInput>
  }

  export type MaintenanceRecordUpdateWithWhereUniqueWithoutDepotInput = {
    where: MaintenanceRecordWhereUniqueInput
    data: XOR<MaintenanceRecordUpdateWithoutDepotInput, MaintenanceRecordUncheckedUpdateWithoutDepotInput>
  }

  export type MaintenanceRecordUpdateManyWithWhereWithoutDepotInput = {
    where: MaintenanceRecordScalarWhereInput
    data: XOR<MaintenanceRecordUpdateManyMutationInput, MaintenanceRecordUncheckedUpdateManyWithoutDepotInput>
  }

  export type MaintenanceRecordScalarWhereInput = {
    AND?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
    OR?: MaintenanceRecordScalarWhereInput[]
    NOT?: MaintenanceRecordScalarWhereInput | MaintenanceRecordScalarWhereInput[]
    id?: IntFilter<"MaintenanceRecord"> | number
    maintenanceId?: StringFilter<"MaintenanceRecord"> | string
    depotId?: IntFilter<"MaintenanceRecord"> | number
    vehicleId?: IntFilter<"MaintenanceRecord"> | number
    maintenanceType?: EnumMaintenanceTypeFilter<"MaintenanceRecord"> | $Enums.MaintenanceType
    serviceDate?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    nextServiceDate?: DateTimeNullableFilter<"MaintenanceRecord"> | Date | string | null
    cost?: FloatFilter<"MaintenanceRecord"> | number
    remarks?: StringNullableFilter<"MaintenanceRecord"> | string | null
    status?: EnumMaintenanceStatusFilter<"MaintenanceRecord"> | $Enums.MaintenanceStatus
    createdAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRecord"> | Date | string
  }

  export type DepotCreateWithoutUsersInput = {
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    drivers?: DriverCreateNestedManyWithoutDepotInput
    vehicles?: VehicleCreateNestedManyWithoutDepotInput
    routes?: RouteCreateNestedManyWithoutDepotInput
    schedules?: ScheduleCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordCreateNestedManyWithoutDepotInput
  }

  export type DepotUncheckedCreateWithoutUsersInput = {
    id?: number
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    drivers?: DriverUncheckedCreateNestedManyWithoutDepotInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutDepotInput
    routes?: RouteUncheckedCreateNestedManyWithoutDepotInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordUncheckedCreateNestedManyWithoutDepotInput
  }

  export type DepotCreateOrConnectWithoutUsersInput = {
    where: DepotWhereUniqueInput
    create: XOR<DepotCreateWithoutUsersInput, DepotUncheckedCreateWithoutUsersInput>
  }

  export type AuditLogCreateWithoutUserInput = {
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: number
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DepotUpsertWithoutUsersInput = {
    update: XOR<DepotUpdateWithoutUsersInput, DepotUncheckedUpdateWithoutUsersInput>
    create: XOR<DepotCreateWithoutUsersInput, DepotUncheckedCreateWithoutUsersInput>
    where?: DepotWhereInput
  }

  export type DepotUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepotWhereInput
    data: XOR<DepotUpdateWithoutUsersInput, DepotUncheckedUpdateWithoutUsersInput>
  }

  export type DepotUpdateWithoutUsersInput = {
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: DriverUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUpdateManyWithoutDepotNestedInput
    routes?: RouteUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUpdateManyWithoutDepotNestedInput
  }

  export type DepotUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: DriverUncheckedUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutDepotNestedInput
    routes?: RouteUncheckedUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUncheckedUpdateManyWithoutDepotNestedInput
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: IntFilter<"AuditLog"> | number
    userId?: IntFilter<"AuditLog"> | number
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type DepotCreateWithoutDriversInput = {
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutDepotInput
    vehicles?: VehicleCreateNestedManyWithoutDepotInput
    routes?: RouteCreateNestedManyWithoutDepotInput
    schedules?: ScheduleCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordCreateNestedManyWithoutDepotInput
  }

  export type DepotUncheckedCreateWithoutDriversInput = {
    id?: number
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutDepotInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutDepotInput
    routes?: RouteUncheckedCreateNestedManyWithoutDepotInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordUncheckedCreateNestedManyWithoutDepotInput
  }

  export type DepotCreateOrConnectWithoutDriversInput = {
    where: DepotWhereUniqueInput
    create: XOR<DepotCreateWithoutDriversInput, DepotUncheckedCreateWithoutDriversInput>
  }

  export type ScheduleCreateWithoutDriverInput = {
    scheduleId?: string
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    depot: DepotCreateNestedOneWithoutSchedulesInput
    route: RouteCreateNestedOneWithoutSchedulesInput
    vehicle: VehicleCreateNestedOneWithoutSchedulesInput
    trips?: TripCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutDriverInput = {
    id?: number
    scheduleId?: string
    depotId: number
    routeId: number
    vehicleId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutDriverInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutDriverInput, ScheduleUncheckedCreateWithoutDriverInput>
  }

  export type ScheduleCreateManyDriverInputEnvelope = {
    data: ScheduleCreateManyDriverInput | ScheduleCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type DepotUpsertWithoutDriversInput = {
    update: XOR<DepotUpdateWithoutDriversInput, DepotUncheckedUpdateWithoutDriversInput>
    create: XOR<DepotCreateWithoutDriversInput, DepotUncheckedCreateWithoutDriversInput>
    where?: DepotWhereInput
  }

  export type DepotUpdateToOneWithWhereWithoutDriversInput = {
    where?: DepotWhereInput
    data: XOR<DepotUpdateWithoutDriversInput, DepotUncheckedUpdateWithoutDriversInput>
  }

  export type DepotUpdateWithoutDriversInput = {
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUpdateManyWithoutDepotNestedInput
    routes?: RouteUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUpdateManyWithoutDepotNestedInput
  }

  export type DepotUncheckedUpdateWithoutDriversInput = {
    id?: IntFieldUpdateOperationsInput | number
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutDepotNestedInput
    routes?: RouteUncheckedUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUncheckedUpdateManyWithoutDepotNestedInput
  }

  export type ScheduleUpsertWithWhereUniqueWithoutDriverInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutDriverInput, ScheduleUncheckedUpdateWithoutDriverInput>
    create: XOR<ScheduleCreateWithoutDriverInput, ScheduleUncheckedCreateWithoutDriverInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutDriverInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutDriverInput, ScheduleUncheckedUpdateWithoutDriverInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutDriverInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutDriverInput>
  }

  export type DepotCreateWithoutVehiclesInput = {
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutDepotInput
    drivers?: DriverCreateNestedManyWithoutDepotInput
    routes?: RouteCreateNestedManyWithoutDepotInput
    schedules?: ScheduleCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordCreateNestedManyWithoutDepotInput
  }

  export type DepotUncheckedCreateWithoutVehiclesInput = {
    id?: number
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutDepotInput
    drivers?: DriverUncheckedCreateNestedManyWithoutDepotInput
    routes?: RouteUncheckedCreateNestedManyWithoutDepotInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordUncheckedCreateNestedManyWithoutDepotInput
  }

  export type DepotCreateOrConnectWithoutVehiclesInput = {
    where: DepotWhereUniqueInput
    create: XOR<DepotCreateWithoutVehiclesInput, DepotUncheckedCreateWithoutVehiclesInput>
  }

  export type ScheduleCreateWithoutVehicleInput = {
    scheduleId?: string
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    depot: DepotCreateNestedOneWithoutSchedulesInput
    route: RouteCreateNestedOneWithoutSchedulesInput
    driver: DriverCreateNestedOneWithoutSchedulesInput
    trips?: TripCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutVehicleInput = {
    id?: number
    scheduleId?: string
    depotId: number
    routeId: number
    driverId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutVehicleInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutVehicleInput, ScheduleUncheckedCreateWithoutVehicleInput>
  }

  export type ScheduleCreateManyVehicleInputEnvelope = {
    data: ScheduleCreateManyVehicleInput | ScheduleCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type FuelLogCreateWithoutVehicleInput = {
    fuelId?: string
    date: Date | string
    liters: number
    cost: number
    distanceCovered: number
    createdAt?: Date | string
    updatedAt?: Date | string
    depot: DepotCreateNestedOneWithoutFuelLogsInput
  }

  export type FuelLogUncheckedCreateWithoutVehicleInput = {
    id?: number
    fuelId?: string
    depotId: number
    date: Date | string
    liters: number
    cost: number
    distanceCovered: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelLogCreateOrConnectWithoutVehicleInput = {
    where: FuelLogWhereUniqueInput
    create: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput>
  }

  export type FuelLogCreateManyVehicleInputEnvelope = {
    data: FuelLogCreateManyVehicleInput | FuelLogCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRecordCreateWithoutVehicleInput = {
    maintenanceId?: string
    maintenanceType: $Enums.MaintenanceType
    serviceDate: Date | string
    nextServiceDate?: Date | string | null
    cost: number
    remarks?: string | null
    status?: $Enums.MaintenanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    depot: DepotCreateNestedOneWithoutMaintenancesInput
  }

  export type MaintenanceRecordUncheckedCreateWithoutVehicleInput = {
    id?: number
    maintenanceId?: string
    depotId: number
    maintenanceType: $Enums.MaintenanceType
    serviceDate: Date | string
    nextServiceDate?: Date | string | null
    cost: number
    remarks?: string | null
    status?: $Enums.MaintenanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceRecordWhereUniqueInput
    create: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceRecordCreateManyVehicleInputEnvelope = {
    data: MaintenanceRecordCreateManyVehicleInput | MaintenanceRecordCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type DepotUpsertWithoutVehiclesInput = {
    update: XOR<DepotUpdateWithoutVehiclesInput, DepotUncheckedUpdateWithoutVehiclesInput>
    create: XOR<DepotCreateWithoutVehiclesInput, DepotUncheckedCreateWithoutVehiclesInput>
    where?: DepotWhereInput
  }

  export type DepotUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: DepotWhereInput
    data: XOR<DepotUpdateWithoutVehiclesInput, DepotUncheckedUpdateWithoutVehiclesInput>
  }

  export type DepotUpdateWithoutVehiclesInput = {
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutDepotNestedInput
    drivers?: DriverUpdateManyWithoutDepotNestedInput
    routes?: RouteUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUpdateManyWithoutDepotNestedInput
  }

  export type DepotUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutDepotNestedInput
    drivers?: DriverUncheckedUpdateManyWithoutDepotNestedInput
    routes?: RouteUncheckedUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUncheckedUpdateManyWithoutDepotNestedInput
  }

  export type ScheduleUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutVehicleInput, ScheduleUncheckedUpdateWithoutVehicleInput>
    create: XOR<ScheduleCreateWithoutVehicleInput, ScheduleUncheckedCreateWithoutVehicleInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutVehicleInput, ScheduleUncheckedUpdateWithoutVehicleInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutVehicleInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutVehicleInput>
  }

  export type FuelLogUpsertWithWhereUniqueWithoutVehicleInput = {
    where: FuelLogWhereUniqueInput
    update: XOR<FuelLogUpdateWithoutVehicleInput, FuelLogUncheckedUpdateWithoutVehicleInput>
    create: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput>
  }

  export type FuelLogUpdateWithWhereUniqueWithoutVehicleInput = {
    where: FuelLogWhereUniqueInput
    data: XOR<FuelLogUpdateWithoutVehicleInput, FuelLogUncheckedUpdateWithoutVehicleInput>
  }

  export type FuelLogUpdateManyWithWhereWithoutVehicleInput = {
    where: FuelLogScalarWhereInput
    data: XOR<FuelLogUpdateManyMutationInput, FuelLogUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceRecordUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceRecordWhereUniqueInput
    update: XOR<MaintenanceRecordUpdateWithoutVehicleInput, MaintenanceRecordUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceRecordCreateWithoutVehicleInput, MaintenanceRecordUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceRecordUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceRecordWhereUniqueInput
    data: XOR<MaintenanceRecordUpdateWithoutVehicleInput, MaintenanceRecordUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceRecordUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceRecordScalarWhereInput
    data: XOR<MaintenanceRecordUpdateManyMutationInput, MaintenanceRecordUncheckedUpdateManyWithoutVehicleInput>
  }

  export type DepotCreateWithoutRoutesInput = {
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutDepotInput
    drivers?: DriverCreateNestedManyWithoutDepotInput
    vehicles?: VehicleCreateNestedManyWithoutDepotInput
    schedules?: ScheduleCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordCreateNestedManyWithoutDepotInput
  }

  export type DepotUncheckedCreateWithoutRoutesInput = {
    id?: number
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutDepotInput
    drivers?: DriverUncheckedCreateNestedManyWithoutDepotInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutDepotInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordUncheckedCreateNestedManyWithoutDepotInput
  }

  export type DepotCreateOrConnectWithoutRoutesInput = {
    where: DepotWhereUniqueInput
    create: XOR<DepotCreateWithoutRoutesInput, DepotUncheckedCreateWithoutRoutesInput>
  }

  export type RouteStopCreateWithoutRouteInput = {
    stopName: string
    stopOrder: number
    createdAt?: Date | string
  }

  export type RouteStopUncheckedCreateWithoutRouteInput = {
    id?: number
    stopName: string
    stopOrder: number
    createdAt?: Date | string
  }

  export type RouteStopCreateOrConnectWithoutRouteInput = {
    where: RouteStopWhereUniqueInput
    create: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput>
  }

  export type RouteStopCreateManyRouteInputEnvelope = {
    data: RouteStopCreateManyRouteInput | RouteStopCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type ScheduleCreateWithoutRouteInput = {
    scheduleId?: string
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    depot: DepotCreateNestedOneWithoutSchedulesInput
    vehicle: VehicleCreateNestedOneWithoutSchedulesInput
    driver: DriverCreateNestedOneWithoutSchedulesInput
    trips?: TripCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutRouteInput = {
    id?: number
    scheduleId?: string
    depotId: number
    vehicleId: number
    driverId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutRouteInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput>
  }

  export type ScheduleCreateManyRouteInputEnvelope = {
    data: ScheduleCreateManyRouteInput | ScheduleCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type DepotUpsertWithoutRoutesInput = {
    update: XOR<DepotUpdateWithoutRoutesInput, DepotUncheckedUpdateWithoutRoutesInput>
    create: XOR<DepotCreateWithoutRoutesInput, DepotUncheckedCreateWithoutRoutesInput>
    where?: DepotWhereInput
  }

  export type DepotUpdateToOneWithWhereWithoutRoutesInput = {
    where?: DepotWhereInput
    data: XOR<DepotUpdateWithoutRoutesInput, DepotUncheckedUpdateWithoutRoutesInput>
  }

  export type DepotUpdateWithoutRoutesInput = {
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutDepotNestedInput
    drivers?: DriverUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUpdateManyWithoutDepotNestedInput
  }

  export type DepotUncheckedUpdateWithoutRoutesInput = {
    id?: IntFieldUpdateOperationsInput | number
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutDepotNestedInput
    drivers?: DriverUncheckedUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUncheckedUpdateManyWithoutDepotNestedInput
  }

  export type RouteStopUpsertWithWhereUniqueWithoutRouteInput = {
    where: RouteStopWhereUniqueInput
    update: XOR<RouteStopUpdateWithoutRouteInput, RouteStopUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput>
  }

  export type RouteStopUpdateWithWhereUniqueWithoutRouteInput = {
    where: RouteStopWhereUniqueInput
    data: XOR<RouteStopUpdateWithoutRouteInput, RouteStopUncheckedUpdateWithoutRouteInput>
  }

  export type RouteStopUpdateManyWithWhereWithoutRouteInput = {
    where: RouteStopScalarWhereInput
    data: XOR<RouteStopUpdateManyMutationInput, RouteStopUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteStopScalarWhereInput = {
    AND?: RouteStopScalarWhereInput | RouteStopScalarWhereInput[]
    OR?: RouteStopScalarWhereInput[]
    NOT?: RouteStopScalarWhereInput | RouteStopScalarWhereInput[]
    id?: IntFilter<"RouteStop"> | number
    routeId?: IntFilter<"RouteStop"> | number
    stopName?: StringFilter<"RouteStop"> | string
    stopOrder?: IntFilter<"RouteStop"> | number
    createdAt?: DateTimeFilter<"RouteStop"> | Date | string
  }

  export type ScheduleUpsertWithWhereUniqueWithoutRouteInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutRouteInput, ScheduleUncheckedUpdateWithoutRouteInput>
    create: XOR<ScheduleCreateWithoutRouteInput, ScheduleUncheckedCreateWithoutRouteInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutRouteInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutRouteInput, ScheduleUncheckedUpdateWithoutRouteInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutRouteInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteCreateWithoutStopsInput = {
    routeId?: string
    routeName: string
    startLocation: string
    endLocation: string
    distance?: number
    estimatedDuration?: number
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot: DepotCreateNestedOneWithoutRoutesInput
    schedules?: ScheduleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutStopsInput = {
    id?: number
    routeId?: string
    depotId: number
    routeName: string
    startLocation: string
    endLocation: string
    distance?: number
    estimatedDuration?: number
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    schedules?: ScheduleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutStopsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutStopsInput, RouteUncheckedCreateWithoutStopsInput>
  }

  export type RouteUpsertWithoutStopsInput = {
    update: XOR<RouteUpdateWithoutStopsInput, RouteUncheckedUpdateWithoutStopsInput>
    create: XOR<RouteCreateWithoutStopsInput, RouteUncheckedCreateWithoutStopsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutStopsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutStopsInput, RouteUncheckedUpdateWithoutStopsInput>
  }

  export type RouteUpdateWithoutStopsInput = {
    routeId?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneRequiredWithoutRoutesNestedInput
    schedules?: ScheduleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutStopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: ScheduleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type DepotCreateWithoutSchedulesInput = {
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutDepotInput
    drivers?: DriverCreateNestedManyWithoutDepotInput
    vehicles?: VehicleCreateNestedManyWithoutDepotInput
    routes?: RouteCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordCreateNestedManyWithoutDepotInput
  }

  export type DepotUncheckedCreateWithoutSchedulesInput = {
    id?: number
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutDepotInput
    drivers?: DriverUncheckedCreateNestedManyWithoutDepotInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutDepotInput
    routes?: RouteUncheckedCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordUncheckedCreateNestedManyWithoutDepotInput
  }

  export type DepotCreateOrConnectWithoutSchedulesInput = {
    where: DepotWhereUniqueInput
    create: XOR<DepotCreateWithoutSchedulesInput, DepotUncheckedCreateWithoutSchedulesInput>
  }

  export type RouteCreateWithoutSchedulesInput = {
    routeId?: string
    routeName: string
    startLocation: string
    endLocation: string
    distance?: number
    estimatedDuration?: number
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot: DepotCreateNestedOneWithoutRoutesInput
    stops?: RouteStopCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutSchedulesInput = {
    id?: number
    routeId?: string
    depotId: number
    routeName: string
    startLocation: string
    endLocation: string
    distance?: number
    estimatedDuration?: number
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    stops?: RouteStopUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutSchedulesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
  }

  export type VehicleCreateWithoutSchedulesInput = {
    vehicleId?: string
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot: DepotCreateNestedOneWithoutVehiclesInput
    fuelLogs?: FuelLogCreateNestedManyWithoutVehicleInput
    maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutSchedulesInput = {
    id?: number
    vehicleId?: string
    depotId: number
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceRecords?: MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutSchedulesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutSchedulesInput, VehicleUncheckedCreateWithoutSchedulesInput>
  }

  export type DriverCreateWithoutSchedulesInput = {
    driverId?: string
    fullName: string
    nic: string
    phone: string
    address?: string | null
    licenseNumber: string
    licenseExpiry: Date | string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot: DepotCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateWithoutSchedulesInput = {
    id?: number
    driverId?: string
    depotId: number
    fullName: string
    nic: string
    phone: string
    address?: string | null
    licenseNumber: string
    licenseExpiry: Date | string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DriverCreateOrConnectWithoutSchedulesInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutSchedulesInput, DriverUncheckedCreateWithoutSchedulesInput>
  }

  export type TripCreateWithoutScheduleInput = {
    tripId?: string
    startTime: Date | string
    endTime?: Date | string | null
    status?: $Enums.TripStatus
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUncheckedCreateWithoutScheduleInput = {
    id?: number
    tripId?: string
    startTime: Date | string
    endTime?: Date | string | null
    status?: $Enums.TripStatus
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCreateOrConnectWithoutScheduleInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutScheduleInput, TripUncheckedCreateWithoutScheduleInput>
  }

  export type TripCreateManyScheduleInputEnvelope = {
    data: TripCreateManyScheduleInput | TripCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type DepotUpsertWithoutSchedulesInput = {
    update: XOR<DepotUpdateWithoutSchedulesInput, DepotUncheckedUpdateWithoutSchedulesInput>
    create: XOR<DepotCreateWithoutSchedulesInput, DepotUncheckedCreateWithoutSchedulesInput>
    where?: DepotWhereInput
  }

  export type DepotUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: DepotWhereInput
    data: XOR<DepotUpdateWithoutSchedulesInput, DepotUncheckedUpdateWithoutSchedulesInput>
  }

  export type DepotUpdateWithoutSchedulesInput = {
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutDepotNestedInput
    drivers?: DriverUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUpdateManyWithoutDepotNestedInput
    routes?: RouteUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUpdateManyWithoutDepotNestedInput
  }

  export type DepotUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutDepotNestedInput
    drivers?: DriverUncheckedUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutDepotNestedInput
    routes?: RouteUncheckedUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUncheckedUpdateManyWithoutDepotNestedInput
  }

  export type RouteUpsertWithoutSchedulesInput = {
    update: XOR<RouteUpdateWithoutSchedulesInput, RouteUncheckedUpdateWithoutSchedulesInput>
    create: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutSchedulesInput, RouteUncheckedUpdateWithoutSchedulesInput>
  }

  export type RouteUpdateWithoutSchedulesInput = {
    routeId?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneRequiredWithoutRoutesNestedInput
    stops?: RouteStopUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stops?: RouteStopUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type VehicleUpsertWithoutSchedulesInput = {
    update: XOR<VehicleUpdateWithoutSchedulesInput, VehicleUncheckedUpdateWithoutSchedulesInput>
    create: XOR<VehicleCreateWithoutSchedulesInput, VehicleUncheckedCreateWithoutSchedulesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutSchedulesInput, VehicleUncheckedUpdateWithoutSchedulesInput>
  }

  export type VehicleUpdateWithoutSchedulesInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneRequiredWithoutVehiclesNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutVehicleNestedInput
    maintenanceRecords?: MaintenanceRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceRecords?: MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type DriverUpsertWithoutSchedulesInput = {
    update: XOR<DriverUpdateWithoutSchedulesInput, DriverUncheckedUpdateWithoutSchedulesInput>
    create: XOR<DriverCreateWithoutSchedulesInput, DriverUncheckedCreateWithoutSchedulesInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutSchedulesInput, DriverUncheckedUpdateWithoutSchedulesInput>
  }

  export type DriverUpdateWithoutSchedulesInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneRequiredWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TripUpsertWithWhereUniqueWithoutScheduleInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutScheduleInput, TripUncheckedUpdateWithoutScheduleInput>
    create: XOR<TripCreateWithoutScheduleInput, TripUncheckedCreateWithoutScheduleInput>
  }

  export type TripUpdateWithWhereUniqueWithoutScheduleInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutScheduleInput, TripUncheckedUpdateWithoutScheduleInput>
  }

  export type TripUpdateManyWithWhereWithoutScheduleInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutScheduleInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: IntFilter<"Trip"> | number
    tripId?: StringFilter<"Trip"> | string
    scheduleId?: IntFilter<"Trip"> | number
    startTime?: DateTimeFilter<"Trip"> | Date | string
    endTime?: DateTimeNullableFilter<"Trip"> | Date | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    remarks?: StringNullableFilter<"Trip"> | string | null
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type ScheduleCreateWithoutTripsInput = {
    scheduleId?: string
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    depot: DepotCreateNestedOneWithoutSchedulesInput
    route: RouteCreateNestedOneWithoutSchedulesInput
    vehicle: VehicleCreateNestedOneWithoutSchedulesInput
    driver: DriverCreateNestedOneWithoutSchedulesInput
  }

  export type ScheduleUncheckedCreateWithoutTripsInput = {
    id?: number
    scheduleId?: string
    depotId: number
    routeId: number
    vehicleId: number
    driverId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleCreateOrConnectWithoutTripsInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutTripsInput, ScheduleUncheckedCreateWithoutTripsInput>
  }

  export type ScheduleUpsertWithoutTripsInput = {
    update: XOR<ScheduleUpdateWithoutTripsInput, ScheduleUncheckedUpdateWithoutTripsInput>
    create: XOR<ScheduleCreateWithoutTripsInput, ScheduleUncheckedCreateWithoutTripsInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutTripsInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutTripsInput, ScheduleUncheckedUpdateWithoutTripsInput>
  }

  export type ScheduleUpdateWithoutTripsInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depot?: DepotUpdateOneRequiredWithoutSchedulesNestedInput
    route?: RouteUpdateOneRequiredWithoutSchedulesNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutSchedulesNestedInput
    driver?: DriverUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutTripsInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DepotCreateWithoutFuelLogsInput = {
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutDepotInput
    drivers?: DriverCreateNestedManyWithoutDepotInput
    vehicles?: VehicleCreateNestedManyWithoutDepotInput
    routes?: RouteCreateNestedManyWithoutDepotInput
    schedules?: ScheduleCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordCreateNestedManyWithoutDepotInput
  }

  export type DepotUncheckedCreateWithoutFuelLogsInput = {
    id?: number
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutDepotInput
    drivers?: DriverUncheckedCreateNestedManyWithoutDepotInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutDepotInput
    routes?: RouteUncheckedCreateNestedManyWithoutDepotInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDepotInput
    maintenances?: MaintenanceRecordUncheckedCreateNestedManyWithoutDepotInput
  }

  export type DepotCreateOrConnectWithoutFuelLogsInput = {
    where: DepotWhereUniqueInput
    create: XOR<DepotCreateWithoutFuelLogsInput, DepotUncheckedCreateWithoutFuelLogsInput>
  }

  export type VehicleCreateWithoutFuelLogsInput = {
    vehicleId?: string
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot: DepotCreateNestedOneWithoutVehiclesInput
    schedules?: ScheduleCreateNestedManyWithoutVehicleInput
    maintenanceRecords?: MaintenanceRecordCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutFuelLogsInput = {
    id?: number
    vehicleId?: string
    depotId: number
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    schedules?: ScheduleUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceRecords?: MaintenanceRecordUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutFuelLogsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutFuelLogsInput, VehicleUncheckedCreateWithoutFuelLogsInput>
  }

  export type DepotUpsertWithoutFuelLogsInput = {
    update: XOR<DepotUpdateWithoutFuelLogsInput, DepotUncheckedUpdateWithoutFuelLogsInput>
    create: XOR<DepotCreateWithoutFuelLogsInput, DepotUncheckedCreateWithoutFuelLogsInput>
    where?: DepotWhereInput
  }

  export type DepotUpdateToOneWithWhereWithoutFuelLogsInput = {
    where?: DepotWhereInput
    data: XOR<DepotUpdateWithoutFuelLogsInput, DepotUncheckedUpdateWithoutFuelLogsInput>
  }

  export type DepotUpdateWithoutFuelLogsInput = {
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutDepotNestedInput
    drivers?: DriverUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUpdateManyWithoutDepotNestedInput
    routes?: RouteUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUpdateManyWithoutDepotNestedInput
  }

  export type DepotUncheckedUpdateWithoutFuelLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutDepotNestedInput
    drivers?: DriverUncheckedUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutDepotNestedInput
    routes?: RouteUncheckedUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDepotNestedInput
    maintenances?: MaintenanceRecordUncheckedUpdateManyWithoutDepotNestedInput
  }

  export type VehicleUpsertWithoutFuelLogsInput = {
    update: XOR<VehicleUpdateWithoutFuelLogsInput, VehicleUncheckedUpdateWithoutFuelLogsInput>
    create: XOR<VehicleCreateWithoutFuelLogsInput, VehicleUncheckedCreateWithoutFuelLogsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutFuelLogsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutFuelLogsInput, VehicleUncheckedUpdateWithoutFuelLogsInput>
  }

  export type VehicleUpdateWithoutFuelLogsInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneRequiredWithoutVehiclesNestedInput
    schedules?: ScheduleUpdateManyWithoutVehicleNestedInput
    maintenanceRecords?: MaintenanceRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutFuelLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: ScheduleUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceRecords?: MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type DepotCreateWithoutMaintenancesInput = {
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutDepotInput
    drivers?: DriverCreateNestedManyWithoutDepotInput
    vehicles?: VehicleCreateNestedManyWithoutDepotInput
    routes?: RouteCreateNestedManyWithoutDepotInput
    schedules?: ScheduleCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogCreateNestedManyWithoutDepotInput
  }

  export type DepotUncheckedCreateWithoutMaintenancesInput = {
    id?: number
    depotCode?: string
    name: string
    code: string
    address?: string | null
    phone?: string | null
    email?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutDepotInput
    drivers?: DriverUncheckedCreateNestedManyWithoutDepotInput
    vehicles?: VehicleUncheckedCreateNestedManyWithoutDepotInput
    routes?: RouteUncheckedCreateNestedManyWithoutDepotInput
    schedules?: ScheduleUncheckedCreateNestedManyWithoutDepotInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutDepotInput
  }

  export type DepotCreateOrConnectWithoutMaintenancesInput = {
    where: DepotWhereUniqueInput
    create: XOR<DepotCreateWithoutMaintenancesInput, DepotUncheckedCreateWithoutMaintenancesInput>
  }

  export type VehicleCreateWithoutMaintenanceRecordsInput = {
    vehicleId?: string
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot: DepotCreateNestedOneWithoutVehiclesInput
    schedules?: ScheduleCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenanceRecordsInput = {
    id?: number
    vehicleId?: string
    depotId: number
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    schedules?: ScheduleUncheckedCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenanceRecordsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
  }

  export type DepotUpsertWithoutMaintenancesInput = {
    update: XOR<DepotUpdateWithoutMaintenancesInput, DepotUncheckedUpdateWithoutMaintenancesInput>
    create: XOR<DepotCreateWithoutMaintenancesInput, DepotUncheckedCreateWithoutMaintenancesInput>
    where?: DepotWhereInput
  }

  export type DepotUpdateToOneWithWhereWithoutMaintenancesInput = {
    where?: DepotWhereInput
    data: XOR<DepotUpdateWithoutMaintenancesInput, DepotUncheckedUpdateWithoutMaintenancesInput>
  }

  export type DepotUpdateWithoutMaintenancesInput = {
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutDepotNestedInput
    drivers?: DriverUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUpdateManyWithoutDepotNestedInput
    routes?: RouteUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutDepotNestedInput
  }

  export type DepotUncheckedUpdateWithoutMaintenancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    depotCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutDepotNestedInput
    drivers?: DriverUncheckedUpdateManyWithoutDepotNestedInput
    vehicles?: VehicleUncheckedUpdateManyWithoutDepotNestedInput
    routes?: RouteUncheckedUpdateManyWithoutDepotNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutDepotNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutDepotNestedInput
  }

  export type VehicleUpsertWithoutMaintenanceRecordsInput = {
    update: XOR<VehicleUpdateWithoutMaintenanceRecordsInput, VehicleUncheckedUpdateWithoutMaintenanceRecordsInput>
    create: XOR<VehicleCreateWithoutMaintenanceRecordsInput, VehicleUncheckedCreateWithoutMaintenanceRecordsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenanceRecordsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenanceRecordsInput, VehicleUncheckedUpdateWithoutMaintenanceRecordsInput>
  }

  export type VehicleUpdateWithoutMaintenanceRecordsInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneRequiredWithoutVehiclesNestedInput
    schedules?: ScheduleUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenanceRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: ScheduleUncheckedUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    userId?: string
    fullName: string
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    depot?: DepotCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: number
    userId?: string
    fullName: string
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    depotId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    depot?: DepotUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    depotId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyDepotInput = {
    id?: number
    userId?: string
    fullName: string
    email: string
    username: string
    password: string
    role: $Enums.UserRole
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type DriverCreateManyDepotInput = {
    id?: number
    driverId?: string
    fullName: string
    nic: string
    phone: string
    address?: string | null
    licenseNumber: string
    licenseExpiry: Date | string
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type VehicleCreateManyDepotInput = {
    id?: number
    vehicleId?: string
    registrationNumber: string
    vehicleType: $Enums.VehicleType
    seatingCapacity: number
    mileage: number
    fuelType: $Enums.FuelType
    status?: $Enums.VehicleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RouteCreateManyDepotInput = {
    id?: number
    routeId?: string
    routeName: string
    startLocation: string
    endLocation: string
    distance?: number
    estimatedDuration?: number
    status?: $Enums.RouteStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ScheduleCreateManyDepotInput = {
    id?: number
    scheduleId?: string
    routeId: number
    vehicleId: number
    driverId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelLogCreateManyDepotInput = {
    id?: number
    fuelId?: string
    vehicleId: number
    date: Date | string
    liters: number
    cost: number
    distanceCovered: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordCreateManyDepotInput = {
    id?: number
    maintenanceId?: string
    vehicleId: number
    maintenanceType: $Enums.MaintenanceType
    serviceDate: Date | string
    nextServiceDate?: Date | string | null
    cost: number
    remarks?: string | null
    status?: $Enums.MaintenanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutDepotInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DriverUpdateWithoutDepotInput = {
    driverId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: ScheduleUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: ScheduleUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateManyWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleUpdateWithoutDepotInput = {
    vehicleId?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: ScheduleUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutVehicleNestedInput
    maintenanceRecords?: MaintenanceRecordUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    schedules?: ScheduleUncheckedUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceRecords?: MaintenanceRecordUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleId?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: EnumVehicleTypeFieldUpdateOperationsInput | $Enums.VehicleType
    seatingCapacity?: IntFieldUpdateOperationsInput | number
    mileage?: FloatFieldUpdateOperationsInput | number
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RouteUpdateWithoutDepotInput = {
    routeId?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stops?: RouteStopUpdateManyWithoutRouteNestedInput
    schedules?: ScheduleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    stops?: RouteStopUncheckedUpdateManyWithoutRouteNestedInput
    schedules?: ScheduleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateManyWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: StringFieldUpdateOperationsInput | string
    routeName?: StringFieldUpdateOperationsInput | string
    startLocation?: StringFieldUpdateOperationsInput | string
    endLocation?: StringFieldUpdateOperationsInput | string
    distance?: FloatFieldUpdateOperationsInput | number
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumRouteStatusFieldUpdateOperationsInput | $Enums.RouteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ScheduleUpdateWithoutDepotInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutSchedulesNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutSchedulesNestedInput
    driver?: DriverUpdateOneRequiredWithoutSchedulesNestedInput
    trips?: TripUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    routeId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    routeId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogUpdateWithoutDepotInput = {
    fuelId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    distanceCovered?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutFuelLogsNestedInput
  }

  export type FuelLogUncheckedUpdateWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    fuelId?: StringFieldUpdateOperationsInput | string
    vehicleId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    distanceCovered?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogUncheckedUpdateManyWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    fuelId?: StringFieldUpdateOperationsInput | string
    vehicleId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    distanceCovered?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordUpdateWithoutDepotInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    maintenanceType?: EnumMaintenanceTypeFieldUpdateOperationsInput | $Enums.MaintenanceType
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextServiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceRecordsNestedInput
  }

  export type MaintenanceRecordUncheckedUpdateWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    maintenanceId?: StringFieldUpdateOperationsInput | string
    vehicleId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: EnumMaintenanceTypeFieldUpdateOperationsInput | $Enums.MaintenanceType
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextServiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordUncheckedUpdateManyWithoutDepotInput = {
    id?: IntFieldUpdateOperationsInput | number
    maintenanceId?: StringFieldUpdateOperationsInput | string
    vehicleId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: EnumMaintenanceTypeFieldUpdateOperationsInput | $Enums.MaintenanceType
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextServiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: number
    action: string
    entity: string
    entityId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyDriverInput = {
    id?: number
    scheduleId?: string
    depotId: number
    routeId: number
    vehicleId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateWithoutDriverInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depot?: DepotUpdateOneRequiredWithoutSchedulesNestedInput
    route?: RouteUpdateOneRequiredWithoutSchedulesNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutSchedulesNestedInput
    trips?: TripUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleCreateManyVehicleInput = {
    id?: number
    scheduleId?: string
    depotId: number
    routeId: number
    driverId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelLogCreateManyVehicleInput = {
    id?: number
    fuelId?: string
    depotId: number
    date: Date | string
    liters: number
    cost: number
    distanceCovered: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceRecordCreateManyVehicleInput = {
    id?: number
    maintenanceId?: string
    depotId: number
    maintenanceType: $Enums.MaintenanceType
    serviceDate: Date | string
    nextServiceDate?: Date | string | null
    cost: number
    remarks?: string | null
    status?: $Enums.MaintenanceStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleUpdateWithoutVehicleInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depot?: DepotUpdateOneRequiredWithoutSchedulesNestedInput
    route?: RouteUpdateOneRequiredWithoutSchedulesNestedInput
    driver?: DriverUpdateOneRequiredWithoutSchedulesNestedInput
    trips?: TripUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogUpdateWithoutVehicleInput = {
    fuelId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    distanceCovered?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depot?: DepotUpdateOneRequiredWithoutFuelLogsNestedInput
  }

  export type FuelLogUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    fuelId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    distanceCovered?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    fuelId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    liters?: FloatFieldUpdateOperationsInput | number
    cost?: FloatFieldUpdateOperationsInput | number
    distanceCovered?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordUpdateWithoutVehicleInput = {
    maintenanceId?: StringFieldUpdateOperationsInput | string
    maintenanceType?: EnumMaintenanceTypeFieldUpdateOperationsInput | $Enums.MaintenanceType
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextServiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depot?: DepotUpdateOneRequiredWithoutMaintenancesNestedInput
  }

  export type MaintenanceRecordUncheckedUpdateWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    maintenanceId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: EnumMaintenanceTypeFieldUpdateOperationsInput | $Enums.MaintenanceType
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextServiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRecordUncheckedUpdateManyWithoutVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    maintenanceId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    maintenanceType?: EnumMaintenanceTypeFieldUpdateOperationsInput | $Enums.MaintenanceType
    serviceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextServiceDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cost?: FloatFieldUpdateOperationsInput | number
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteStopCreateManyRouteInput = {
    id?: number
    stopName: string
    stopOrder: number
    createdAt?: Date | string
  }

  export type ScheduleCreateManyRouteInput = {
    id?: number
    scheduleId?: string
    depotId: number
    vehicleId: number
    driverId: number
    departureTime: Date | string
    arrivalTime: Date | string
    scheduleDate: Date | string
    status?: $Enums.ScheduleStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteStopUpdateWithoutRouteInput = {
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteStopUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteStopUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    stopName?: StringFieldUpdateOperationsInput | string
    stopOrder?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleUpdateWithoutRouteInput = {
    scheduleId?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    depot?: DepotUpdateOneRequiredWithoutSchedulesNestedInput
    vehicle?: VehicleUpdateOneRequiredWithoutSchedulesNestedInput
    driver?: DriverUpdateOneRequiredWithoutSchedulesNestedInput
    trips?: TripUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduleId?: StringFieldUpdateOperationsInput | string
    depotId?: IntFieldUpdateOperationsInput | number
    vehicleId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    scheduleDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyScheduleInput = {
    id?: number
    tripId?: string
    startTime: Date | string
    endTime?: Date | string | null
    status?: $Enums.TripStatus
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutScheduleInput = {
    tripId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    tripId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}