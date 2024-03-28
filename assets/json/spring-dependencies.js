 const data= {
    "dependencies": [
      {
        "name": "General",
        "content": [
          {
            "name": "General",
            "id": "general",
            "description": "Default spring configuration",
            "properties": [
              {
                "id": "server.port",
                "title": "Port",
                "value": "8080",
                "toolTip": "This is the port application run"
              },
              {
                "id": "spring.main.web-application-type",
                "title": "Application type",
                "value": "servlet",
                "toolTip": "This is your application type"
              }
            ]
          }
        ]
      }
      ,
      {
        "name": "Developer Tools",
        "content": [
          {
            "name": "GraalVM Native Support",
            "id": "native",
            "groupId": "org.springframework.boot",
            "artifactId": "spring-boot",
            "description": "Support for compiling Spring applications to native executables using the GraalVM native-image compiler.",
            "starter": false
          },
          {
            "name": "GraphQL DGS Code Generation",
            "id": "dgs-codegen",
            "compatibilityRange": "3.0.0-M1",
            "groupId": "com.netflix.graphql.dgs.codegen",
            "artifactId": "graphql-dgs-codegen-gradle",
            "mappings": [
              {
                "compatibilityRange": "3.0.0-M1",
                "version": "6.0.3"
              }
            ],
            "description": "Generate data types and type-safe APIs for querying GraphQL APIs by parsing schema files.",
            "starter": false
          },
          {
            "name": "Spring Boot DevTools",
            "id": "devtools",
            "groupId": "org.springframework.boot",
            "artifactId": "spring-boot-devtools",
            "scope": "runtime",
            "description": "Provides fast application restarts, LiveReload, and configurations for enhanced development experience.",
            "starter": false,
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#using.devtools"
              }
            ]
          },
          {
            "name": "Lombok",
            "id": "lombok",
            "groupId": "org.projectlombok",
            "artifactId": "lombok",
            "scope": "annotationProcessor",
            "description": "Java annotation library which helps to reduce boilerplate code.",
            "starter": false
          },
          {
            "name": "Spring Configuration Processor",
            "id": "configuration-processor",
            "groupId": "org.springframework.boot",
            "artifactId": "spring-boot-configuration-processor",
            "scope": "annotationProcessor",
            "description": "Generate metadata for developers to offer contextual help and \"code completion\" when working with custom configuration keys (ex.application.properties/.yml files).",
            "starter": false,
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#appendix.configuration-metadata.annotation-processor"
              }
            ]
          },
          {
            "name": "Docker Compose Support",
            "id": "docker-compose",
            "compatibilityRange": "3.1.0-M1",
            "groupId": "org.springframework.boot",
            "artifactId": "spring-boot-docker-compose",
            "scope": "runtime",
            "description": "Provides docker compose support for enhanced development experience.",
            "starter": false,
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#features.docker-compose"
              }
            ]
          },
          {
            "name": "Spring Modulith",
            "id": "modulith",
            "bom": "spring-modulith",
            "compatibility-range": "3.1.0",
            "group-id": "org.springframework.modulith",
            "artifact-id": "spring-modulith-starter-core",
            "description": "Support for building modular monolithic applications.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-modulith/docs/current/reference/html/"
              }
            ]
          }
        ]
      },
      {
        "name": "Web",
        "content": [
          {
            "name": "Spring Web",
            "id": "web",
            "description": "Build web, including RESTful, applications using Spring MVC. Uses Apache Tomcat as the default embedded container.",
            "facets": [
              "web",
              "json"
            ],
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/rest-service/",
                "description": "Building a RESTful Web Service"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/serving-web-content/",
                "description": "Serving Web Content with Spring MVC"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/tutorials/rest/",
                "description": "Building REST services with Spring"
              }
            ]
          },
          {
            "name": "Spring Reactive Web",
            "id": "webflux",
            "description": "Build reactive web applications with Spring WebFlux and Netty.",
            "facets": [
              "json",
              "reactive"
            ],
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/reactive-rest-service/",
                "description": "Building a Reactive RESTful Web Service"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.reactive"
              }
            ]
          },
          {
            "name": "Spring for GraphQL",
            "id": "graphql",
            "description": "Build GraphQL applications with Spring for GraphQL and GraphQL Java.",
            "facets": [
              "json"
            ],
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/graphql-server/",
                "description": "Building a GraphQL service"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.graphql"
              }
            ]
          },
          {
            "name": "Rest Repositories",
            "id": "data-rest",
            "facets": [
              "json"
            ],
            "description": "Exposing Spring Data repositories over REST via Spring Data REST.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-data-rest/",
                "description": "Accessing JPA Data with REST"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-neo4j-data-rest/",
                "description": "Accessing Neo4j Data with REST"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-mongodb-data-rest/",
                "description": "Accessing MongoDB Data with REST"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#howto.data-access.exposing-spring-data-repositories-as-rest"
              }
            ]
          },
          {
            "name": "Spring Session",
            "id": "session",
            "groupId": "org.springframework.session",
            "artifactId": "spring-session-core",
            "description": "Provides an API and implementations for managing user session information.",
            "starter": false,
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-session/reference/"
              }
            ]
          },
          {
            "name": "Rest Repositories HAL Explorer",
            "id": "data-rest-explorer",
            "description": "Browsing Spring Data REST repositories in your browser.",
            "starter": false,
            "groupId": "org.springframework.data",
            "artifactId": "spring-data-rest-hal-explorer"
          },
          {
            "name": "Spring HATEOAS",
            "id": "hateoas",
            "description": "Eases the creation of RESTful APIs that follow the HATEOAS principle when working with Spring / Spring MVC.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/rest-hateoas/",
                "description": "Building a Hypermedia-Driven RESTful Web Service"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.spring-hateoas"
              }
            ]
          },
          {
            "name": "Spring Web Services",
            "id": "web-services",
            "description": "Facilitates contract-first SOAP development. Allows for the creation of flexible web services using one of the many ways to manipulate XML payloads.",
            "aliases": [
              "ws"
            ],
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/producing-web-service/",
                "description": "Producing a SOAP web service"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#io.webservices"
              }
            ]
          },
          {
            "name": "Jersey",
            "id": "jersey",
            "description": "Framework for developing RESTful Web Services in Java that provides support for JAX-RS APIs.",
            "facets": [
              "json"
            ],
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.servlet.jersey"
              }
            ]
          },
          {
            "name": "Vaadin",
            "id": "vaadin",
            "facets": [
              "web"
            ],
            "groupId": "com.vaadin",
            "artifactId": "vaadin-spring-boot-starter",
            "description": "A web framework that allows you to write UI in pure Java without getting bogged down in JS, HTML, and CSS.",
            "bom": "vaadin",
            "compatibilityRange": "[3.0.0,3.3.0-M1)",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/crud-with-vaadin/",
                "description": "Creating CRUD UI with Vaadin"
              },
              {
                "rel": "reference",
                "href": "https://vaadin.com/docs"
              }
            ]
          },
          {
            "name": "Hilla",
            "id": "hilla",
            "bom": "hilla",
            "compatibilityRange": "[3.1.0-M1,3.3.0-M1)",
            "facets": [
              "web"
            ],
            "groupId": "dev.hilla",
            "artifactId": "hilla-react-spring-boot-starter",
            "description": "An open source framework that integrates a Spring Boot Java backend with a reactive TypeScript frontend.",
            "links": [
              {
                "rel": "guide",
                "href": "https://hilla.dev/docs/react/start/quick/#coming-from-spring-initializr",
                "description": "Next Steps with Hilla"
              },
              {
                "rel": "reference",
                "href": "https://hilla.dev/"
              }
            ]
          }
        ]
      },
      {
        "name": "Template Engines",
        "content": [
          {
            "name": "Thymeleaf",
            "id": "thymeleaf",
            "description": "A modern server-side Java template engine for both web and standalone environments. Allows HTML to be correctly displayed in browsers and as static prototypes.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/handling-form-submission/",
                "description": "Handling Form Submission"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.servlet.spring-mvc.template-engines"
              }
            ]
          },
          {
            "name": "Apache Freemarker",
            "id": "freemarker",
            "description": "Java library to generate text output (HTML web pages, e-mails, configuration files, source code, etc.) based on templates and changing data.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.servlet.spring-mvc.template-engines"
              }
            ]
          },
          {
            "name": "Mustache",
            "id": "mustache",
            "description": "Logic-less templates for both web and standalone environments. There are no if statements, else clauses, or for loops. Instead there are only tags.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.servlet.spring-mvc.template-engines"
              }
            ]
          },
          {
            "name": "Groovy Templates",
            "id": "groovy-templates",
            "description": "Groovy templating engine.",
            "facets": [
              "web"
            ],
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.servlet.spring-mvc.template-engines"
              }
            ]
          }
        ]
      },
      {
        "name": "Security",
        "content": [
          {
            "name": "Spring Security",
            "id": "security",
            "description": "Highly customizable authentication and access-control framework for Spring applications.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/securing-web/",
                "description": "Securing a Web Application"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/tutorials/spring-boot-oauth2/",
                "description": "Spring Boot and OAuth2"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/authenticating-ldap/",
                "description": "Authenticating a User with LDAP"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.security"
              }
            ]
          },
          {
            "name": "OAuth2 Client",
            "id": "oauth2-client",
            "description": "Spring Boot integration for Spring Security's OAuth2/OpenID Connect client features.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.security.oauth2.client"
              }
            ]
          },
          {
            "name": "OAuth2 Authorization Server",
            "id": "oauth2-authorization-server",
            "description": "Spring Boot integration for Spring Authorization Server.",
            "compatibilityRange": "3.1.0-RC1",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.security.oauth2.authorization-server"
              }
            ]
          },
          {
            "name": "OAuth2 Resource Server",
            "id": "oauth2-resource-server",
            "description": "Spring Boot integration for Spring Security's OAuth2 resource server features.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#web.security.oauth2.server"
              }
            ]
          },
          {
            "name": "Spring LDAP",
            "id": "data-ldap",
            "description": "Makes it easier to build Spring based applications that use the Lightweight Directory Access Protocol.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.ldap"
              }
            ]
          },
          {
            "name": "Okta",
            "id": "okta",
            "compatibilityRange": "[3.0.0,3.3.0-M1)",
            "description": "Okta specific configuration for Spring Security/Spring Boot OAuth2 features. Enable your Spring Boot application to work with Okta via OAuth 2.0/OIDC.",
            "groupId": "com.okta.spring",
            "artifactId": "okta-spring-boot-starter",
            "mappings": [
              {
                "compatibilityRange": "[3.0.0,3.3.0-M1)",
                "version": "3.0.6"
              }
            ],
            "links": [
              {
                "rel": "guide",
                "href": "https://github.com/okta/samples-java-spring/tree/master/okta-hosted-login",
                "description": "Okta-Hosted Login Page Example"
              },
              {
                "rel": "guide",
                "href": "https://github.com/okta/samples-java-spring/tree/master/custom-login",
                "description": "Custom Login Page Example"
              },
              {
                "rel": "guide",
                "href": "https://github.com/okta/samples-java-spring/tree/master/resource-server",
                "description": "Okta Spring Security Resource Server Example"
              },
              {
                "rel": "reference",
                "href": "https://github.com/okta/okta-spring-boot#readme",
                "description": "Okta Spring Boot documentation"
              }
            ]
          }
        ]
      },
      {
        "name": "SQL",
        "content": [
          {
            "name": "JDBC API",
            "id": "jdbc",
            "description": "Database Connectivity API that defines how a client may connect and query a database.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/relational-data-access/",
                "description": "Accessing Relational Data using JDBC with Spring"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/managing-transactions/",
                "description": "Managing Transactions"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.sql"
              }
            ]
          },
          {
            "name": "Spring Data JPA",
            "id": "data-jpa",
            "description": "Persist data in SQL stores with Java Persistence API using Spring Data and Hibernate.",
            "facets": [
              "jpa"
            ],
            "aliases": [
              "jpa"
            ],
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-data-jpa/"
              },
              {
                "rel": "github",
                "href": "https://github.com/spring-projects/spring-data-jpa"
              },
              {
                "rel": "maven",
                "href": "https://mvnrepository.com/artifact/org.springframework.data/spring-data-jpa"
              }
            ],
            "properties": [
              {
                "id": "spring.jpa.hibernate.ddl-auto",
                "title": "DDL",
                "value": "create-drop",
                "toolTip": "This is DDL",
                "options": [
                  {
                    "label":"create-drop",
                    "value": "create-drop"
                  },
                  {
                    "label":"validate",
                    "value": "validate"
                  },
                  {
                    "label":"update",
                    "value": "update"
                  }
                ]
              }
            ]
          },
          {
            "name": "Spring Data JDBC",
            "id": "data-jdbc",
            "description": "Persist data in SQL stores with plain JDBC using Spring Data.",
            "links": [
              {
                "rel": "guide",
                "href": "https://github.com/spring-projects/spring-data-examples/tree/master/jdbc/basics",
                "description": "Using Spring Data JDBC"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.sql.jdbc"
              }
            ]
          },
          {
            "name": "Spring Data R2DBC",
            "id": "data-r2dbc",
            "description": "Provides Reactive Relational Database Connectivity to persist data in SQL stores using Spring Data in reactive applications.",
            "facets": [
              "reactive"
            ],
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-data-r2dbc/",
                "description": "Accessing data with R2DBC"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.sql.r2dbc"
              },
              {
                "rel": "home",
                "href": "https://r2dbc.io",
                "description": "R2DBC Homepage"
              }
            ]
          },
          {
            "name": "MyBatis Framework",
            "id": "mybatis",
            "compatibilityRange": "[3.0.0,3.3.0-M1)",
            "description": "Persistence framework with support for custom SQL, stored procedures and advanced mappings. MyBatis couples objects with stored procedures or SQL statements using a XML descriptor or annotations.",
            "links": [
              {
                "rel": "guide",
                "href": "https://github.com/mybatis/spring-boot-starter/wiki/Quick-Start",
                "description": "MyBatis Quick Start"
              },
              {
                "rel": "reference",
                "href": "https://mybatis.org/spring-boot-starter/mybatis-spring-boot-autoconfigure/"
              }
            ],
            "groupId": "org.mybatis.spring.boot",
            "artifactId": "mybatis-spring-boot-starter",
            "mappings": [
              {
                "compatibilityRange": "3.0.0",
                "version": "3.0.3"
              }
            ]
          },
          {
            "name": "Liquibase Migration",
            "id": "liquibase",
            "description": "Liquibase database migration and source control library.",
            "groupId": "org.liquibase",
            "artifactId": "liquibase-core",
            "starter": false,
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#howto.data-initialization.migration-tool.liquibase"
              }
            ]
          },
          {
            "name": "Flyway Migration",
            "id": "flyway",
            "description": "Version control for your database so you can migrate from any version (incl. an empty database) to the latest version of the schema.",
            "groupId": "org.flywaydb",
            "artifactId": "flyway-core",
            "starter": false,
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#howto.data-initialization.migration-tool.flyway"
              }
            ]
          },
          {
            "name": "JOOQ Access Layer",
            "id": "jooq",
            "description": "Generate Java code from your database and build type safe SQL queries through a fluent API.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.sql.jooq"
              }
            ]
          },
          {
            "name": "IBM DB2 Driver",
            "id": "db2",
            "description": "A JDBC driver that provides access to IBM DB2.",
            "groupId": "com.ibm.db2",
            "artifactId": "jcc",
            "scope": "runtime",
            "starter": false
          },
          {
            "name": "Apache Derby Database",
            "id": "derby",
            "description": "An open source relational database implemented entirely in Java.",
            "groupId": "org.apache.derby",
            "artifactId": "derby",
            "scope": "runtime",
            "starter": false
          },
          {
            "name": "H2 Database",
            "id": "h2",
            "description": "Provides a fast in-memory database that supports JDBC API and R2DBC access, with a small (2mb) footprint. Supports embedded and server modes as well as a browser based console application.",
            "groupId": "com.h2database",
            "artifactId": "h2",
            "scope": "runtime",
            "starter": false
          },
          {
            "name": "HyperSQL Database",
            "id": "hsql",
            "description": "Lightweight 100% Java SQL Database Engine.",
            "groupId": "org.hsqldb",
            "artifactId": "hsqldb",
            "scope": "runtime",
            "starter": false
          },
          {
            "name": "MariaDB Driver",
            "id": "mariadb",
            "description": "MariaDB JDBC and R2DBC driver.",
            "groupId": "org.mariadb.jdbc",
            "artifactId": "mariadb-java-client",
            "scope": "runtime",
            "starter": false
          },
          {
            "name": "MS SQL Server Driver",
            "id": "sqlserver",
            "description": "A JDBC and R2DBC driver that provides access to Microsoft SQL Server and Azure SQL Database from any Java application.",
            "groupId": "com.microsoft.sqlserver",
            "artifactId": "mssql-jdbc",
            "scope": "runtime",
            "starter": false
          },
          {
            "name": "MySQL Driver",
            "id": "mysql",
            "description": "MySQL JDBC driver.",
            "groupId": "com.mysql",
            "artifactId": "mysql-connector-j",
            "scope": "runtime",
            "starter": false,
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-data-mysql/"
              },
              {
                "rel": "github",
                "href": "https://github.com/mysql/mysql-server"
              },
              {
                "rel": "maven",
                "href": "https://mvnrepository.com/artifact/com.mysql/mysql-connector-j"
              }
            ],
            "properties": [
              {
                "id": "spring.datasource.url",
                "title": "Database url",
                "value": "jdbc:mysql://localhost:3306/your_database",
                "toolTip": "JDBC use this url to connect to your database"
              },
              {
                "id": "spring.datasource.username",
                "title": "Username",
                "value": "root",
                "toolTip": "This is username to authentication with your database"
              },
              {
                "id": "spring.datasource.password",
                "title": "Password",
                "value": "",
                "toolTip": "This is password to authentication with your database"
              },
              {
                "id": "spring.jpa.database-platform",
                "title": "Database platform",
                "value": "org.hibernate.dialect.MySQL8Dialect",
                "toolTip": "This is platform driver",
                "required": true
              },
              {
                "id": "spring.datasource.driver-class-name",
                "title": "Driver class name",
                "value": "com.mysql.cj.jdbc.Driver",
                "toolTip": "This is driver class name",
                "required": true
              }
            ]
          },
          {
            "name": "Oracle Driver",
            "id": "oracle",
            "description": "A JDBC driver that provides access to Oracle.",
            "groupId": "com.oracle.database.jdbc",
            "artifactId": "ojdbc11",
            "scope": "runtime",
            "starter": false
          },
          {
            "name": "PostgreSQL Driver",
            "id": "postgresql",
            "description": "A JDBC and R2DBC driver that allows Java programs to connect to a PostgreSQL database using standard, database independent Java code.",
            "groupId": "org.postgresql",
            "artifactId": "postgresql",
            "scope": "runtime",
            "starter": false,
            "properties": [
              {
                "id": "spring.datasource.url",
                "title": "Database url",
                "value": "jdbc:postgresql://localhost:5432/postgres",
                "toolTip": "JDBC use this url to connect to your database"
              },
              {
                "id": "spring.datasource.username",
                "title": "Username",
                "value": "postgres",
                "toolTip": "This is username to authentication with your database"
              },
              {
                "id": "spring.datasource.password",
                "title": "Password",
                "value": "",
                "toolTip": "This is password to authentication with your database"
              },
              {
                "id": "spring.jpa.database-platform",
                "title": "Database platform",
                "value": "org.hibernate.dialect.PostgreSQLDialect",
                "toolTip": "This is platform driver",
                "required": true
              }
            ]
          }
        ]
      },
      {
        "name": "NoSQL",
        "content": [
          {
            "name": "Spring Data Redis (Access+Driver)",
            "id": "data-redis",
            "description": "Advanced and thread-safe Java Redis client for synchronous, asynchronous, and reactive usage. Supports Cluster, Sentinel, Pipelining, Auto-Reconnect, Codecs and much more.",
            "aliases": [
              "redis"
            ],
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/messaging-redis/",
                "description": "Messaging with Redis"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.redis"
              }
            ]
          },
          {
            "name": "Spring Data Reactive Redis",
            "id": "data-redis-reactive",
            "description": "Access Redis key-value data stores in a reactive fashion with Spring Data Redis.",
            "facets": [
              "reactive"
            ],
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/messaging-redis/",
                "description": "Messaging with Redis"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.redis"
              }
            ]
          },
          {
            "name": "Spring Data MongoDB",
            "id": "data-mongodb",
            "description": "Store data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-data-mongodb/",
                "description": "Accessing Data with MongoDB"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.mongodb"
              }
            ]
          },
          {
            "name": "Spring Data Reactive MongoDB",
            "id": "data-mongodb-reactive",
            "description": "Provides asynchronous stream processing with non-blocking back pressure for MongoDB.",
            "facets": [
              "reactive"
            ],
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.mongodb"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-data-mongodb/",
                "description": "Accessing Data with MongoDB"
              }
            ]
          },
          {
            "name": "Spring Data Elasticsearch (Access+Driver)",
            "id": "data-elasticsearch",
            "description": "A distributed, RESTful search and analytics engine with Spring Data Elasticsearch.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.elasticsearch"
              }
            ]
          },
          {
            "name": "Spring Data for Apache Cassandra",
            "id": "data-cassandra",
            "description": "A free and open-source, distributed, NoSQL database management system that offers high-scalability and high-performance.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.cassandra"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-data-cassandra/"
              }
            ]
          },
          {
            "name": "Spring Data Reactive for Apache Cassandra",
            "id": "data-cassandra-reactive",
            "description": "Access Cassandra NoSQL Database in a reactive fashion.",
            "facets": [
              "reactive"
            ],
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.cassandra"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-data-cassandra/"
              }
            ]
          },
          {
            "name": "Spring Data Couchbase",
            "id": "data-couchbase",
            "description": "NoSQL document-oriented database that offers in memory-first architecture, geo-distributed deployments, and workload isolation.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.couchbase"
              }
            ]
          },
          {
            "name": "Spring Data Reactive Couchbase",
            "id": "data-couchbase-reactive",
            "description": "Access Couchbase NoSQL database in a reactive fashion with Spring Data Couchbase.",
            "facets": [
              "reactive"
            ],
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.couchbase"
              }
            ]
          },
          {
            "name": "Spring Data Neo4j",
            "id": "data-neo4j",
            "description": "An open source NoSQL database that stores data structured as graphs consisting of nodes, connected by relationships.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/accessing-data-neo4j/",
                "description": "Accessing Data with Neo4j"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.neo4j"
              }
            ]
          }
        ]
      },
      {
        "name": "Messaging",
        "content": [
          {
            "name": "Spring Integration",
            "id": "integration",
            "description": "Adds support for Enterprise Integration Patterns. Enables lightweight messaging and supports integration with external systems via declarative adapters.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/integration/",
                "description": "Integrating Data"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.spring-integration"
              }
            ]
          },
          {
            "name": "Spring for RabbitMQ",
            "id": "amqp",
            "description": "Gives your applications a common platform to send and receive messages, and your messages a safe place to live until received.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/messaging-rabbitmq/",
                "description": "Messaging with RabbitMQ"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.amqp"
              }
            ]
          },
          {
            "name": "Spring for Apache Kafka",
            "id": "kafka",
            "description": "Publish, subscribe, store, and process streams of records.",
            "groupId": "org.springframework.kafka",
            "artifactId": "spring-kafka",
            "starter": false,
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.kafka"
              }
            ]
          },
          {
            "name": "Spring for Apache Kafka Streams",
            "id": "kafka-streams",
            "description": "Building stream processing applications with Apache Kafka Streams.",
            "groupId": "org.apache.kafka",
            "artifactId": "kafka-streams",
            "starter": false,
            "links": [
              {
                "rel": "guide",
                "href": "https://github.com/spring-cloud/spring-cloud-stream-samples/tree/master/kafka-streams-samples",
                "description": "Samples for using Apache Kafka Streams with Spring Cloud stream"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-kafka/docs/current/reference/html/#streams-kafka-streams",
                "description": "Apache Kafka Streams Support"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-stream/docs/current/reference/htmlsingle/index.html#_kafka_streams_binding_capabilities_of_spring_cloud_stream",
                "description": "Apache Kafka Streams Binding Capabilities of Spring Cloud Stream"
              }
            ]
          },
          {
            "name": "Spring for Apache ActiveMQ 5",
            "id": "activemq",
            "description": "Spring JMS support with Apache ActiveMQ 'Classic'.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/messaging-jms/",
                "description": "Java Message Service API via Apache ActiveMQ Classic."
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.jms.activemq"
              }
            ]
          },
          {
            "name": "Spring for Apache ActiveMQ Artemis",
            "id": "artemis",
            "description": "Spring JMS support with Apache ActiveMQ Artemis.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/messaging-jms/",
                "description": "Messaging with JMS"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.jms.artemis"
              }
            ]
          },
          {
            "name": "Spring for Apache Pulsar",
            "id": "pulsar",
            "description": "Build messaging applications with Apache Pulsar",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.pulsar"
              }
            ],
            "mappings": [
              {
                "compatibilityRange": "[3.0.0,3.2.0-M3)",
                "version": "0.2.0",
                "groupId": "org.springframework.pulsar",
                "artifactId": "spring-pulsar-spring-boot-starter"
              }
            ]
          },
          {
            "name": "Spring for Apache Pulsar (Reactive)",
            "id": "pulsar-reactive",
            "description": "Build reactive messaging applications with Apache Pulsar",
            "facets": [
              "reactive"
            ],
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.pulsar"
              }
            ],
            "mappings": [
              {
                "compatibilityRange": "[3.0.0,3.2.0-M1)",
                "version": "0.2.0",
                "groupId": "org.springframework.pulsar",
                "artifactId": "spring-pulsar-reactive-spring-boot-starter"
              }
            ]
          },
          {
            "name": "WebSocket",
            "id": "websocket",
            "description": "Build Servlet-based WebSocket applications with SockJS and STOMP.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/messaging-stomp-websocket/",
                "description": "Using WebSocket to build an interactive web application"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#messaging.websockets"
              }
            ]
          },
          {
            "name": "RSocket",
            "id": "rsocket",
            "description": "RSocket.io applications with Spring Messaging and Netty.",
            "facets": [
              "reactive"
            ],
            "links": [
              {
                "rel": "reference",
                "href": "https://rsocket.io/"
              }
            ]
          },
          {
            "name": "Apache Camel",
            "id": "camel",
            "compatibilityRange": "[3.0.0,3.3.0-M1)",
            "mappings": [
              {
                "compatibilityRange": "[3.0.0,3.2.0-M1)",
                "version": "4.2.0"
              },
              {
                "compatibilityRange": "[3.2.0-M1,3.3.0-M1)",
                "version": "4.3.0"
              }
            ],
            "description": "Apache Camel is an open source integration framework that empowers you to quickly and easily integrate various systems consuming or producing data.",
            "groupId": "org.apache.camel.springboot",
            "artifactId": "camel-spring-boot-starter",
            "links": [
              {
                "rel": "guide",
                "href": "https://camel.apache.org/camel-spring-boot/latest/spring-boot.html",
                "description": "Using Apache Camel with Spring Boot"
              }
            ]
          },
          {
            "name": "Solace PubSub+",
            "bom": "solace-spring-boot",
            "id": "solace",
            "compatibilityRange": "[3.0.0,3.3.0-M1)",
            "description": "Connect to a Solace PubSub+ Advanced Event Broker to publish, subscribe, request/reply and store/replay messages",
            "groupId": "com.solace.spring.boot",
            "artifactId": "solace-spring-boot-starter",
            "links": [
              {
                "rel": "reference",
                "href": "https://www.solace.dev/start-spring-io-help/",
                "description": "Getting started with Solace and Spring"
              },
              {
                "rel": "reference",
                "href": "https://solace.dev",
                "description": "Solace Developer Portal"
              }
            ]
          }
        ]
      },
      {
        "name": "I/O",
        "content": [
          {
            "name": "Spring Batch",
            "id": "batch",
            "description": "Batch applications with transactions, retry/skip and chunk based processing.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/batch-processing/",
                "description": "Creating a Batch Service"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#howto.batch"
              }
            ]
          },
          {
            "name": "Validation",
            "id": "validation",
            "description": "Bean Validation with Hibernate validator.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#io.validation"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/validating-form-input/"
              }
            ]
          },
          {
            "name": "Java Mail Sender",
            "id": "mail",
            "description": "Send email using Java Mail and Spring Framework's JavaMailSender.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#io.email"
              }
            ]
          },
          {
            "name": "Quartz Scheduler",
            "id": "quartz",
            "description": "Schedule jobs using Quartz.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#io.quartz"
              }
            ]
          },
          {
            "name": "Spring Cache Abstraction",
            "id": "cache",
            "description": "Provides cache-related operations, such as the ability to update the content of the cache, but does not provide the actual data store.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/caching/",
                "description": "Caching Data with Spring"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#io.caching"
              }
            ]
          },
          {
            "name": "Picocli",
            "id": "picocli",
            "groupId": "info.picocli",
            "artifactId": "picocli-spring-boot-starter",
            "compatibilityRange": "[3.0.0,3.2.0-M1)",
            "description": "Build command line applications with picocli.",
            "mappings": [
              {
                "compatibilityRange": "[3.0.0,3.2.0-M1)",
                "version": "4.7.5"
              }
            ],
            "links": [
              {
                "rel": "reference",
                "href": "https://picocli.info/#_spring_boot_example"
              }
            ]
          },
          {
            "name": "Spring Shell",
            "id": "spring-shell",
            "groupId": "org.springframework.shell",
            "artifactId": "spring-shell-starter",
            "compatibilityRange": "[3.1.0,3.3.0-M1)",
            "description": "Build command line applications with spring.",
            "bom": "spring-shell",
            "links": [
              {
                "rel": "reference",
                "href": "https://spring.io/projects/spring-shell"
              }
            ]
          },
          {
            "name": "Timefold Solver",
            "id": "timefold-solver",
            "compatibilityRange": "[2.6.0,3.3.0-M1)",
            "groupId": "ai.timefold.solver",
            "artifactId": "timefold-solver-spring-boot-starter",
            "description": "AI solver to optimize operations and scheduling.",
            "bom": "timefold-solver",
            "links": [
              {
                "rel": "reference",
                "href": "https://timefold.ai/docs/timefold-solver/latest/quickstart/spring-boot/spring-boot-quickstart#springBootJavaQuickStart"
              },
              {
                "rel": "sample",
                "href": "https://github.com/TimefoldAI/timefold-quickstarts/tree/stable/technology/java-spring-boot",
                "description": "Timetabling sample. Assign lessons to timeslots and rooms to produce a better schedule for teachers and students"
              }
            ]
          }
        ]
      },
      {
        "name": "Ops",
        "content": [
          {
            "name": "Spring Boot Actuator",
            "id": "actuator",
            "description": "Supports built in (or custom) endpoints that let you monitor and manage your application - such as application health, metrics, sessions, etc.",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/actuator-service/",
                "description": "Building a RESTful Web Service with Spring Boot Actuator"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator"
              }
            ]
          },
          {
            "name": "codecentric's Spring Boot Admin (Client)",
            "id": "codecentric-spring-boot-admin-client",
            "groupId": "de.codecentric",
            "artifactId": "spring-boot-admin-starter-client",
            "description": "Required for your application to register with a Codecentric's Spring Boot Admin Server instance.",
            "compatibilityRange": "[3.0.0,3.2.0-M1)",
            "bom": "codecentric-spring-boot-admin",
            "links": [
              {
                "rel": "reference",
                "href": "https://codecentric.github.io/spring-boot-admin/current/#getting-started"
              }
            ]
          },
          {
            "name": "codecentric's Spring Boot Admin (Server)",
            "id": "codecentric-spring-boot-admin-server",
            "groupId": "de.codecentric",
            "artifactId": "spring-boot-admin-starter-server",
            "description": "A community project to manage and monitor your Spring Boot applications. Provides a UI on top of the Spring Boot Actuator endpoints.",
            "compatibilityRange": "[3.0.0,3.2.0-M1)",
            "bom": "codecentric-spring-boot-admin",
            "links": [
              {
                "rel": "reference",
                "href": "https://codecentric.github.io/spring-boot-admin/current/#getting-started"
              }
            ]
          },
          {
            "name": "Sentry",
            "id": "sentry",
            "bom": "sentry",
            "description": "Application performance monitoring and error tracking that help software teams see clearer, solve quicker, and learn continuously.",
            "compatibilityRange": "[3.0.0,3.2.0-M1)",
            "groupId": "io.sentry",
            "artifactId": "sentry-spring-boot-starter-jakarta",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.sentry.io/platforms/java/"
              },
              {
                "rel": "guide",
                "href": "https://docs.sentry.io/platforms/java/guides/spring-boot/",
                "description": "Getting Started with Sentry"
              }
            ]
          }
        ]
      },
      {
        "name": "Observability",
        "content": [
          {
            "name": "Datadog",
            "id": "datadog",
            "groupId": "io.micrometer",
            "artifactId": "micrometer-registry-datadog",
            "scope": "runtime",
            "starter": false,
            "description": "Publish Micrometer metrics to Datadog, a dimensional time-series SaaS with built-in dashboarding and alerting.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator.metrics.export.datadog"
              }
            ]
          },
          {
            "name": "Dynatrace",
            "id": "dynatrace",
            "groupId": "io.micrometer",
            "artifactId": "micrometer-registry-dynatrace",
            "scope": "runtime",
            "starter": false,
            "description": "Publish Micrometer metrics to Dynatrace, a platform featuring observability, AIOps, application security and analytics.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/index.html#actuator.metrics.export.dynatrace"
              }
            ]
          },
          {
            "name": "Influx",
            "id": "influx",
            "groupId": "io.micrometer",
            "artifactId": "micrometer-registry-influx",
            "scope": "runtime",
            "starter": false,
            "description": "Publish Micrometer metrics to InfluxDB, a dimensional time-series server that support real-time stream processing of data.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator.metrics.export.influx"
              }
            ]
          },
          {
            "name": "Graphite",
            "id": "graphite",
            "groupId": "io.micrometer",
            "artifactId": "micrometer-registry-graphite",
            "scope": "runtime",
            "starter": false,
            "description": "Publish Micrometer metrics to Graphite, a hierarchical metrics system backed by a fixed-size database.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator.metrics.export.graphite"
              }
            ]
          },
          {
            "name": "New Relic",
            "id": "new-relic",
            "groupId": "io.micrometer",
            "artifactId": "micrometer-registry-new-relic",
            "scope": "runtime",
            "starter": false,
            "description": "Publish Micrometer metrics to New Relic, a SaaS offering with a full UI and a query language called NRQL.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator.metrics.export.newrelic"
              }
            ]
          },
          {
            "name": "Prometheus",
            "id": "prometheus",
            "groupId": "io.micrometer",
            "artifactId": "micrometer-registry-prometheus",
            "scope": "runtime",
            "starter": false,
            "description": "Expose Micrometer metrics in Prometheus format, an in-memory dimensional time series database with a simple built-in UI, a custom query language, and math operations.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#actuator.metrics.export.prometheus"
              }
            ]
          },
          {
            "name": "Distributed Tracing",
            "id": "distributed-tracing",
            "description": "Enable span and trace IDs in logs.",
            "groupId": "io.micrometer",
            "artifactId": "micrometer-tracing-bridge-brave",
            "starter": false
          },
          {
            "name": "Wavefront",
            "id": "wavefront",
            "description": "Publish metrics and optionally distributed traces to Tanzu Observability by Wavefront, a SaaS-based metrics monitoring and analytics platform that lets you visualize, query, and alert over data from across your entire stack.",
            "groupId": "io.micrometer",
            "artifactId": "micrometer-registry-wavefront",
            "scope": "runtime",
            "starter": false
          },
          {
            "name": "Zipkin",
            "id": "zipkin",
            "description": "Enable and expose span and trace IDs to Zipkin.",
            "groupId": "io.zipkin.reporter2",
            "artifactId": "zipkin-reporter-brave",
            "starter": false
          }
        ]
      },
      {
        "name": "Testing",
        "content": [
          {
            "name": "Spring REST Docs",
            "id": "restdocs",
            "description": "Document RESTful services by combining hand-written with Asciidoctor and auto-generated snippets produced with Spring MVC Test.",
            "groupId": "org.springframework.restdocs",
            "artifactId": "spring-restdocs-mockmvc",
            "scope": "test",
            "starter": false,
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-restdocs/docs/current/reference/html5/"
              }
            ]
          },
          {
            "name": "Testcontainers",
            "id": "testcontainers",
            "description": "Provide lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.",
            "groupId": "org.testcontainers",
            "artifactId": "junit-jupiter",
            "scope": "test",
            "starter": false,
            "links": [
              {
                "rel": "reference",
                "href": "https://java.testcontainers.org/"
              }
            ]
          },
          {
            "name": "Contract Verifier",
            "bom": "spring-cloud",
            "id": "cloud-contract-verifier",
            "description": "Moves TDD to the level of software architecture by enabling Consumer Driven Contract (CDC) development.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-contract-verifier",
            "scope": "test",
            "links": [
              {
                "rel": "reference",
                "href": "https://cloud.spring.io/spring-cloud-contract/reference/htmlsingle/"
              }
            ]
          },
          {
            "name": "Contract Stub Runner",
            "bom": "spring-cloud",
            "id": "cloud-contract-stub-runner",
            "description": "Stub Runner for HTTP/Messaging based communication. Allows creating WireMock stubs from RestDocs tests.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-contract-stub-runner",
            "scope": "test",
            "links": [
              {
                "rel": "reference",
                "href": "https://cloud.spring.io/spring-cloud-contract/reference/htmlsingle/index.html#features-stub-runner"
              }
            ]
          },
          {
            "name": "Embedded LDAP Server",
            "id": "unboundid-ldap",
            "description": "Provides a platform neutral way for running a LDAP server in unit tests.",
            "groupId": "com.unboundid",
            "artifactId": "unboundid-ldapsdk",
            "scope": "test",
            "starter": false,
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-boot/docs/{bootVersion}/reference/htmlsingle/index.html#data.nosql.ldap.embedded"
              }
            ]
          }
        ]
      },
      {
        "name": "Spring Cloud",
        "bom": "spring-cloud",
        "content": [
          {
            "name": "Cloud Bootstrap",
            "id": "cloud-starter",
            "description": "Non-specific Spring Cloud features, unrelated to external libraries or integrations (e.g. Bootstrap context and @RefreshScope).",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-commons/docs/current/reference/html/"
              }
            ]
          },
          {
            "name": "Function",
            "id": "cloud-function",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-function-context",
            "starter": false,
            "description": "Promotes the implementation of business logic via functions and supports a uniform programming model across serverless providers, as well as the ability to run standalone (locally or in a PaaS).",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-function/docs/current/reference/html/spring-cloud-function.html"
              },
              {
                "rel": "sample",
                "href": "https://github.com/spring-cloud/spring-cloud-function/tree/main/spring-cloud-function-samples",
                "description": "Various sample apps using Spring Cloud Function"
              }
            ]
          },
          {
            "name": "Task",
            "id": "cloud-task",
            "description": "Allows a user to develop and run short lived microservices using Spring Cloud. Run them locally, in the cloud, and on Spring Cloud Data Flow.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-task",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-task/docs/current/reference/html/"
              }
            ]
          }
        ]
      },
      {
        "name": "Spring Cloud Config",
        "bom": "spring-cloud",
        "content": [
          {
            "name": "Config Client",
            "id": "cloud-config-client",
            "description": "Client that connects to a Spring Cloud Config Server to fetch the application's configuration.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-config",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-config/docs/current/reference/html/#_client_side_usage",
                "description": "Config Client Quick Start"
              }
            ]
          },
          {
            "name": "Config Server",
            "id": "cloud-config-server",
            "description": "Central management for configuration via Git, SVN, or HashiCorp Vault.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-config-server",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-config/docs/current/reference/html/#_spring_cloud_config_server"
              },
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/centralized-configuration/",
                "description": "Centralized Configuration"
              }
            ]
          },
          {
            "name": "Vault Configuration",
            "id": "cloud-starter-vault-config",
            "description": "Provides client-side support for externalized configuration in a distributed system. Using HashiCorp's Vault you have a central place to manage external secret properties for applications across all environments.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-vault-config",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-vault/docs/current/reference/html/#client-side-usage",
                "description": "Vault Client Quick Start"
              }
            ]
          },
          {
            "name": "Apache Zookeeper Configuration",
            "id": "cloud-starter-zookeeper-config",
            "description": "Enable and configure common patterns inside your application and build large distributed systems with Apache Zookeeper based components. The provided patterns include Service Discovery and Configuration.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-zookeeper-config",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-zookeeper/docs/current/reference/html/#distributed-configuration-usage",
                "description": "Apache Zookeeper Quick Start"
              }
            ]
          },
          {
            "name": "Consul Configuration",
            "id": "cloud-starter-consul-config",
            "description": "Enable and configure the common patterns inside your application and build large distributed systems with Hashicorp’s Consul. The patterns provided include Service Discovery, Distributed Configuration and Control Bus.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-consul-config",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-consul/docs/current/reference/html/#distributed-configuration-usage",
                "description": "Spring Cloud Consul Quick Start"
              }
            ]
          }
        ]
      },
      {
        "name": "Spring Cloud Discovery",
        "bom": "spring-cloud",
        "content": [
          {
            "name": "Eureka Discovery Client",
            "id": "cloud-eureka",
            "description": "A REST based service for locating services for the purpose of load balancing and failover of middle-tier servers.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-netflix-eureka-client",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/service-registration-and-discovery/",
                "description": "Service Registration and Discovery with Eureka and Spring Cloud"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-netflix/docs/current/reference/html/#service-discovery-eureka-clients"
              }
            ]
          },
          {
            "name": "Eureka Server",
            "id": "cloud-eureka-server",
            "description": "spring-cloud-netflix Eureka Server.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-netflix-eureka-server",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/service-registration-and-discovery/",
                "description": "Service Registration and Discovery with Eureka and Spring Cloud"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-netflix/docs/current/reference/html/#spring-cloud-eureka-server"
              }
            ]
          },
          {
            "name": "Apache Zookeeper Discovery",
            "id": "cloud-starter-zookeeper-discovery",
            "description": "Service discovery with Apache Zookeeper.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-zookeeper-discovery",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-zookeeper/docs/current/reference/html/#spring-cloud-zookeeper-discovery"
              }
            ]
          },
          {
            "name": "Consul Discovery",
            "id": "cloud-starter-consul-discovery",
            "description": "Service discovery with Hashicorp Consul.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-consul-discovery",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-consul/docs/current/reference/html/#spring-cloud-consul-discovery"
              }
            ]
          }
        ]
      },
      {
        "name": "Spring Cloud Routing",
        "bom": "spring-cloud",
        "content": [
          {
            "name": "Gateway",
            "id": "cloud-gateway",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-gateway-mvc",
            "compatibilityRange": "3.2.0-M1",
            "description": "Provides a simple, yet effective way to route to APIs in Servlet-based applications. Provides cross-cutting concerns to those APIs such as security, monitoring/metrics, and resiliency.",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/"
              }
            ]
          },
          {
            "name": "Reactive Gateway",
            "id": "cloud-gateway-reactive",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-gateway",
            "description": "Provides a simple, yet effective way to route to APIs in reactive applications. Provides cross-cutting concerns to those APIs such as security, monitoring/metrics, and resiliency.",
            "facets": [
              "reactive"
            ],
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/"
              },
              {
                "rel": "guide",
                "href": "https://github.com/spring-cloud-samples/spring-cloud-gateway-sample",
                "description": "Using Spring Cloud Gateway"
              }
            ]
          },
          {
            "name": "OpenFeign",
            "id": "cloud-feign",
            "description": "Declarative REST Client. OpenFeign creates a dynamic implementation of an interface decorated with JAX-RS or Spring MVC annotations.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-openfeign",
            "links": [
              {
                "rel": "sample",
                "href": "https://github.com/spring-cloud-samples/feign-eureka",
                "description": "Declarative REST calls with Spring Cloud OpenFeign sample"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-openfeign/docs/current/reference/html/"
              }
            ]
          },
          {
            "name": "Cloud LoadBalancer",
            "id": "cloud-loadbalancer",
            "description": "Client-side load-balancing with Spring Cloud LoadBalancer.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-loadbalancer",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/spring-cloud-loadbalancer/",
                "description": "Client-side load-balancing with Spring Cloud LoadBalancer"
              },
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-commons/docs/current/reference/html/#spring-cloud-loadbalancer"
              }
            ]
          }
        ]
      },
      {
        "name": "Spring Cloud Circuit Breaker",
        "bom": "spring-cloud",
        "content": [
          {
            "name": "Resilience4J",
            "id": "cloud-resilience4j",
            "description": "Spring Cloud Circuit breaker with Resilience4j as the underlying implementation.",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-starter-circuitbreaker-resilience4j",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-circuitbreaker/docs/current/reference/html/#configuring-resilience4j-circuit-breakers"
              }
            ]
          }
        ]
      },
      {
        "name": "Spring Cloud Messaging",
        "bom": "spring-cloud",
        "content": [
          {
            "name": "Cloud Bus",
            "id": "cloud-bus",
            "description": "Links nodes of a distributed system with a lightweight message broker which can used to broadcast state changes or other management instructions (requires a binder, e.g. Apache Kafka or RabbitMQ).",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-bus",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-bus/docs/current/reference/html/"
              }
            ]
          },
          {
            "name": "Cloud Stream",
            "id": "cloud-stream",
            "description": "Framework for building highly scalable event-driven microservices connected with shared messaging systems (requires a binder, e.g. Apache Kafka, Apache Pulsar, RabbitMQ, or Solace PubSub+).",
            "groupId": "org.springframework.cloud",
            "artifactId": "spring-cloud-stream",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.spring.io/spring-cloud-stream/docs/current/reference/html/spring-cloud-stream.html#spring-cloud-stream-overview-introducing"
              }
            ]
          }
        ]
      },
      {
        "name": "VMware Tanzu Application Service",
        "bom": "spring-cloud-services",
        "compatibilityRange": "[3.0.0,3.3.0-M1)",
        "content": [
          {
            "name": "Config Client (TAS)",
            "id": "scs-config-client",
            "description": "Config client on VMware Tanzu Application Service.",
            "groupId": "io.pivotal.spring.cloud",
            "artifactId": "spring-cloud-services-starter-config-client",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.vmware.com/en/Spring-Cloud-Services-for-VMware-Tanzu/index.html"
              }
            ]
          },
          {
            "name": "Service Registry (TAS)",
            "id": "scs-service-registry",
            "description": "Eureka service discovery client on VMware Tanzu Application Service.",
            "groupId": "io.pivotal.spring.cloud",
            "artifactId": "spring-cloud-services-starter-service-registry",
            "links": [
              {
                "rel": "reference",
                "href": "https://docs.vmware.com/en/Spring-Cloud-Services-for-VMware-Tanzu/index.html"
              }
            ]
          }
        ]
      },
      {
        "name": "Microsoft Azure",
        "bom": "spring-cloud-azure",
        "compatibilityRange": "[3.0.0,3.3.0-M1)",
        "content": [
          {
            "name": "Azure Support",
            "id": "azure-support",
            "groupId": "com.azure.spring",
            "artifactId": "spring-cloud-azure-starter",
            "description": "Auto-configuration for Azure Services (Service Bus, Storage, Active Directory, Key Vault, and more).",
            "links": [
              {
                "rel": "guide",
                "href": "https://spring.io/guides/gs/spring-boot-for-azure/",
                "description": "Deploying a Spring Boot app to Azure"
              },
              {
                "rel": "reference",
                "href": "https://aka.ms/spring/msdocs/developer-guide",
                "description": "Spring Cloud Azure developer guide"
              },
              {
                "rel": "sample",
                "href": "https://aka.ms/spring/samples",
                "description": "Azure Samples"
              }
            ]
          },
          {
            "name": "Azure Active Directory",
            "id": "azure-active-directory",
            "groupId": "com.azure.spring",
            "artifactId": "spring-cloud-azure-starter-active-directory",
            "description": "Spring Security integration with Azure Active Directory for authentication.",
            "links": [
              {
                "rel": "guide",
                "href": "https://aka.ms/spring/msdocs/aad",
                "description": "Securing a Java Web App with the Spring Boot Starter for Azure Active Directory"
              },
              {
                "rel": "reference",
                "href": "https://microsoft.github.io/spring-cloud-azure/current/reference/html/index.html#spring-security-with-azure-active-directory"
              },
              {
                "rel": "sample",
                "href": "https://aka.ms/spring/samples/latest/aad",
                "description": "Azure Active Directory Sample"
              }
            ]
          },
          {
            "name": "Azure Cosmos DB",
            "id": "azure-cosmos-db",
            "groupId": "com.azure.spring",
            "artifactId": "spring-cloud-azure-starter-data-cosmos",
            "description": "Fully managed NoSQL database service for modern app development, including Spring Data support.",
            "links": [
              {
                "rel": "guide",
                "href": "https://aka.ms/spring/msdocs/cosmos",
                "description": "How to use Spring Boot Starter with Azure Cosmos DB SQL API"
              },
              {
                "rel": "reference",
                "href": "https://microsoft.github.io/spring-cloud-azure/current/reference/html/index.html#spring-data-support"
              },
              {
                "rel": "sample",
                "href": "https://aka.ms/spring/samples/latest/cosmos",
                "description": "Azure Cosmos DB Sample"
              }
            ]
          },
          {
            "name": "Azure Key Vault",
            "id": "azure-keyvault",
            "groupId": "com.azure.spring",
            "artifactId": "spring-cloud-azure-starter-keyvault",
            "description": "All key vault features are supported, e.g. manage application secrets and certificates.",
            "links": [
              {
                "rel": "guide",
                "href": "https://aka.ms/spring/msdocs/keyvault",
                "description": "Read Secrets from Azure Key Vault in a Spring Boot Application"
              },
              {
                "rel": "guide",
                "href": "https://aka.ms/spring/msdocs/keyvault/certificates",
                "description": "Securing Spring Boot Applications with Azure Key Vault Certificates"
              },
              {
                "rel": "reference",
                "href": "https://microsoft.github.io/spring-cloud-azure/current/reference/html/index.html#secret-management"
              },
              {
                "rel": "sample",
                "href": "https://aka.ms/spring/samples/latest/keyvault",
                "description": "Azure Key Vault Sample"
              }
            ]
          },
          {
            "name": "Azure Storage",
            "id": "azure-storage",
            "groupId": "com.azure.spring",
            "artifactId": "spring-cloud-azure-starter-storage",
            "description": "All Storage features are supported, e.g. blob, fileshare and queue.",
            "links": [
              {
                "rel": "guide",
                "href": "https://aka.ms/spring/msdocs/storage",
                "description": "How to use the Spring Boot starter for Azure Storage"
              },
              {
                "rel": "reference",
                "href": "https://microsoft.github.io/spring-cloud-azure/current/reference/html/index.html#resource-handling"
              },
              {
                "rel": "sample",
                "href": "https://aka.ms/spring/samples/latest/storage",
                "description": "Azure Storage Sample"
              }
            ]
          }
        ]
      },
      {
        "name": "Google Cloud",
        "bom": "spring-cloud-gcp",
        "compatibilityRange": "[3.0.0,3.3.0-M1)",
        "content": [
          {
            "name": "Google Cloud Support",
            "id": "cloud-gcp",
            "description": "Contains auto-configuration support for every Google Cloud integration. Most of the auto-configuration code is only enabled if other dependencies are added to the classpath.",
            "groupId": "com.google.cloud",
            "artifactId": "spring-cloud-gcp-starter",
            "links": [
              {
                "rel": "reference",
                "href": "https://googlecloudplatform.github.io/spring-cloud-gcp/reference/html/index.html"
              },
              {
                "rel": "guide",
                "href": "https://github.com/GoogleCloudPlatform/spring-cloud-gcp/tree/main/spring-cloud-gcp-samples",
                "description": "Google Cloud Samples"
              }
            ]
          },
          {
            "name": "Google Cloud Messaging",
            "id": "cloud-gcp-pubsub",
            "description": "Adds the Google Cloud Support entry and all the required dependencies so that the Google Cloud Pub/Sub integration work out of the box.",
            "groupId": "com.google.cloud",
            "artifactId": "spring-cloud-gcp-starter-pubsub",
            "links": [
              {
                "rel": "reference",
                "href": "https://googlecloudplatform.github.io/spring-cloud-gcp/reference/html/index.html#cloud-pubsub"
              },
              {
                "rel": "guide",
                "href": "https://github.com/GoogleCloudPlatform/spring-cloud-gcp/tree/main/spring-cloud-gcp-samples/spring-cloud-gcp-pubsub-sample",
                "description": "Google Cloud Pub/Sub Sample"
              }
            ]
          },
          {
            "name": "Google Cloud Storage",
            "id": "cloud-gcp-storage",
            "description": "Adds the Google Cloud Support entry and all the required dependencies so that the Google Cloud Storage integration work out of the box.",
            "groupId": "com.google.cloud",
            "artifactId": "spring-cloud-gcp-starter-storage",
            "links": [
              {
                "rel": "reference",
                "href": "https://googlecloudplatform.github.io/spring-cloud-gcp/reference/html/index.html#cloud-storage"
              },
              {
                "rel": "guide",
                "href": "https://github.com/GoogleCloudPlatform/spring-cloud-gcp/tree/main/spring-cloud-gcp-samples/spring-cloud-gcp-storage-resource-sample"
              }
            ]
          }
        ]
      }
    ]
  }

  export default data;