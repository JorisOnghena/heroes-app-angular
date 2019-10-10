export class JwtToken {


    unique_name: string;

    /**
     * The "iss" (issuer) claim identifies principal that issued the JWT.
     */
    iss: string;

    /**
     * The "sub" (subject) claim identifies the subject of the JWT.
     */
    sub: string;

    /**
     * The "aud" (audience) claim identifies the recipients that the JWT is intended for.
     * Each principal intended to process the JWT must identify itself with a value in the audience claim.
     * If the principal processing the claim does not identify itself with a value in the aud claim when this claim is present,
     * then the JWT must be rejected.
     */
    aud: string;

    /**
     * The "nbf" (not before) claim identifies the time before which the JWT MUST NOT be accepted for processing.
     */
    nbf: number;

    /**
     * The "exp" (expiration time) claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing.
     */
    exp: number;

    /**
     * The "iat" (issued at) claim identifies the time at which the JWT was issued.
     */
    iat: number;

    /**
     * Case sensitive unique identifier of the token even among different issuers.
     */
    jti: string;
  }
