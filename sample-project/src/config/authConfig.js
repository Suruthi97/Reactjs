import { LogLevel } from "@azure/msal-browser";

/**
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signIn: process.env.REACT_APP_B2C_POLICY_NAME_SIGNIN_URL,
        forgotPassword: process.env.REACT_APP_B2C_POLICY_NAME_FORGOT_PASSWORD_URL,
        editProfile: process.env.REACT_APP_B2C_POLICY_NAME_EDIT_PROFILE_URL
    },
    authorities: {
        signIn: {
            authority: process.env.REACT_APP_B2C_POLICY_AUTHRITIES_SIGNIN_URL
        },
        forgotPassword: {
            authority: process.env.REACT_APP_B2C_POLICY_AUTHRITIES_FORGOT_PASSWORD_URL
        },
        editProfile: {
            authority: process.env.REACT_APP_B2C_POLICY_AUTHRITIES_EDIT_PROFILE_URL
        }
    },
    authorityDomain: process.env.REACT_APP_B2C_POLICY_AUTHRITIES_DOMAIN_URL
}

/**
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 * 
 * https://abstracttechb2c.onmicrosoft.com/9b2be0af-7f3e-4709-a999-b816464857e4
 */
export const msalConfig = {
    auth: {
        clientId: process.env.REACT_APP_MSAL_CONFIG_AUTH_CLIENT_ID, 
        authority: b2cPolicies.authorities.signIn.authority,
        knownAuthorities: [b2cPolicies.authorityDomain],
        redirectUri: process.env.REACT_APP_REDIRECT_URL
    },
    cache: {
        cacheLocation: process.env.REACT_APP_MSAL_CONFIG_CACHE_LOCATION,
        storeAuthStateInCookie: process.env.REACT_APP_MSAL_CONFIG_CACHE_STORE_AUTH_STATE_IN_COOKIE,
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case LogLevel.Warning:		
                        console.warn(message);		
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};

/**
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: []
};