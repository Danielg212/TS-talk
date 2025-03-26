//https://www.typescriptlang.org/play/?#code/KYOwrgtgBASg9gG2AZygbwFBSgQQCYQCWIUAvFAOQCGBxFANFlAOoBOhALsK2ZQO7surBkxjAa3XhVbi83ChgC+GDHIDGCKjKgAzMCDUdCcEgAsqyHGrUpkAClaJgALlhPkASlcA3OITwA3Crmlta2dtS0IBQeUAD0cVAAkiDeVAj+AHQYIVY2yPbwSMiZ+EQgsQlQAGrpWSpqJsgcbsUAjLyY2GXErgBENOV9jNhsnNz9AuOsw6KyE1B9MhIzSlAWUI0gzUEYVQDCJt7cLXAARgBWwIZQANbAAJ5QxOtQHA8ADsAY71+twABpR6oci-YBwHT-ZBtADa9weELen3BkKKKDaAF0VOpNNo9AYjCYoBA4McHE5XGigQ9PD4-IEVFVALwbgFKdqAAUVYjlYAEIMCSyRQAOZgFAcGK7ZmAWR2oABxZYcPkC4ARQZ0DySxJMmU4BDIOBQIUKpWklVoko9CoBIA

enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    ERROR = 'ERROR'
}


    function logMessage(level: LogLevel, message: string){ }

    logMessage(LogLevel.DEBUG, 'Debugging message');

    
    















    



    // const LOG_LEVEL = {
    //     DEBUG:'DEBUG',
    //      INFO:'INFO',
    //      ERROR:'ERROR'
    //      } as const;
     
    // type ObjectValues<T>  = T[keyof T];

    // type LogLevel = ObjectValues<typeof LOG_LEVEL>;



