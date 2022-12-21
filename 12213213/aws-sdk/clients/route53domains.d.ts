import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Route53Domains extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Route53Domains.Types.ClientConfiguration)
  config: Config & Route53Domains.Types.ClientConfiguration;
  /**
   * Accepts the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using TransferDomainToAnotherAwsAccount.  Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled. 
   */
  acceptDomainTransferFromAnotherAwsAccount(params: Route53Domains.Types.AcceptDomainTransferFromAnotherAwsAccountRequest, callback?: (err: AWSError, data: Route53Domains.Types.AcceptDomainTransferFromAnotherAwsAccountResponse) => void): Request<Route53Domains.Types.AcceptDomainTransferFromAnotherAwsAccountResponse, AWSError>;
  /**
   * Accepts the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using TransferDomainToAnotherAwsAccount.  Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled. 
   */
  acceptDomainTransferFromAnotherAwsAccount(callback?: (err: AWSError, data: Route53Domains.Types.AcceptDomainTransferFromAnotherAwsAccountResponse) => void): Request<Route53Domains.Types.AcceptDomainTransferFromAnotherAwsAccountResponse, AWSError>;
  /**
   * Cancels the transfer of a domain from the current AWS account to another AWS account. You initiate a transfer between AWS accounts using TransferDomainToAnotherAwsAccount.   You must cancel the transfer before the other AWS account accepts the transfer using AcceptDomainTransferFromAnotherAwsAccount.  Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled. 
   */
  cancelDomainTransferToAnotherAwsAccount(params: Route53Domains.Types.CancelDomainTransferToAnotherAwsAccountRequest, callback?: (err: AWSError, data: Route53Domains.Types.CancelDomainTransferToAnotherAwsAccountResponse) => void): Request<Route53Domains.Types.CancelDomainTransferToAnotherAwsAccountResponse, AWSError>;
  /**
   * Cancels the transfer of a domain from the current AWS account to another AWS account. You initiate a transfer between AWS accounts using TransferDomainToAnotherAwsAccount.   You must cancel the transfer before the other AWS account accepts the transfer using AcceptDomainTransferFromAnotherAwsAccount.  Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled. 
   */
  cancelDomainTransferToAnotherAwsAccount(callback?: (err: AWSError, data: Route53Domains.Types.CancelDomainTransferToAnotherAwsAccountResponse) => void): Request<Route53Domains.Types.CancelDomainTransferToAnotherAwsAccountResponse, AWSError>;
  /**
   * This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.
   */
  checkDomainAvailability(params: Route53Domains.Types.CheckDomainAvailabilityRequest, callback?: (err: AWSError, data: Route53Domains.Types.CheckDomainAvailabilityResponse) => void): Request<Route53Domains.Types.CheckDomainAvailabilityResponse, AWSError>;
  /**
   * This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.
   */
  checkDomainAvailability(callback?: (err: AWSError, data: Route53Domains.Types.CheckDomainAvailabilityResponse) => void): Request<Route53Domains.Types.CheckDomainAvailabilityResponse, AWSError>;
  /**
   * Checks whether a domain name can be transferred to Amazon Route 53. 
   */
  checkDomainTransferability(params: Route53Domains.Types.CheckDomainTransferabilityRequest, callback?: (err: AWSError, data: Route53Domains.Types.CheckDomainTransferabilityResponse) => void): Request<Route53Domains.Types.CheckDomainTransferabilityResponse, AWSError>;
  /**
   * Checks whether a domain name can be transferred to Amazon Route 53. 
   */
  checkDomainTransferability(callback?: (err: AWSError, data: Route53Domains.Types.CheckDomainTransferabilityResponse) => void): Request<Route53Domains.Types.CheckDomainTransferabilityResponse, AWSError>;
  /**
   * This operation deletes the specified tags for a domain. All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.
   */
  deleteTagsForDomain(params: Route53Domains.Types.DeleteTagsForDomainRequest, callback?: (err: AWSError, data: Route53Domains.Types.DeleteTagsForDomainResponse) => void): Request<Route53Domains.Types.DeleteTagsForDomainResponse, AWSError>;
  /**
   * This operation deletes the specified tags for a domain. All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.
   */
  deleteTagsForDomain(callback?: (err: AWSError, data: Route53Domains.Types.DeleteTagsForDomainResponse) => void): Request<Route53Domains.Types.DeleteTagsForDomainResponse, AWSError>;
  /**
   * This operation disables automatic renewal of domain registration for the specified domain.
   */
  disableDomainAutoRenew(params: Route53Domains.Types.DisableDomainAutoRenewRequest, callback?: (err: AWSError, data: Route53Domains.Types.DisableDomainAutoRenewResponse) => void): Request<Route53Domains.Types.DisableDomainAutoRenewResponse, AWSError>;
  /**
   * This operation disables automatic renewal of domain registration for the specified domain.
   */
  disableDomainAutoRenew(callback?: (err: AWSError, data: Route53Domains.Types.DisableDomainAutoRenewResponse) => void): Request<Route53Domains.Types.DisableDomainAutoRenewResponse, AWSError>;
  /**
   * This operation removes the transfer lock on the domain (specifically the clientTransferProhibited status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
   */
  disableDomainTransferLock(params: Route53Domains.Types.DisableDomainTransferLockRequest, callback?: (err: AWSError, data: Route53Domains.Types.DisableDomainTransferLockResponse) => void): Request<Route53Domains.Types.DisableDomainTransferLockResponse, AWSError>;
  /**
   * This operation removes the transfer lock on the domain (specifically the clientTransferProhibited status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
   */
  disableDomainTransferLock(callback?: (err: AWSError, data: Route53Domains.Types.DisableDomainTransferLockResponse) => void): Request<Route53Domains.Types.DisableDomainTransferLockResponse, AWSError>;
  /**
   * This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your AWS account. The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see Domains That You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.
   */
  enableDomainAutoRenew(params: Route53Domains.Types.EnableDomainAutoRenewRequest, callback?: (err: AWSError, data: Route53Domains.Types.EnableDomainAutoRenewResponse) => void): Request<Route53Domains.Types.EnableDomainAutoRenewResponse, AWSError>;
  /**
   * This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your AWS account. The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see Domains That You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.
   */
  enableDomainAutoRenew(callback?: (err: AWSError, data: Route53Domains.Types.EnableDomainAutoRenewResponse) => void): Request<Route53Domains.Types.EnableDomainAutoRenewResponse, AWSError>;
  /**
   * This operation sets the transfer lock on the domain (specifically the clientTransferProhibited status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
   */
  enableDomainTransferLock(params: Route53Domains.Types.EnableDomainTransferLockRequest, callback?: (err: AWSError, data: Route53Domains.Types.EnableDomainTransferLockResponse) => void): Request<Route53Domains.Types.EnableDomainTransferLockResponse, AWSError>;
  /**
   * This operation sets the transfer lock on the domain (specifically the clientTransferProhibited status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
   */
  enableDomainTransferLock(callback?: (err: AWSError, data: Route53Domains.Types.EnableDomainTransferLockResponse) => void): Request<Route53Domains.Types.EnableDomainTransferLockResponse, AWSError>;
  /**
   * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded. If you want us to resend the email, use the ResendContactReachabilityEmail operation.
   */
  getContactReachabilityStatus(params: Route53Domains.Types.GetContactReachabilityStatusRequest, callback?: (err: AWSError, data: Route53Domains.Types.GetContactReachabilityStatusResponse) => void): Request<Route53Domains.Types.GetContactReachabilityStatusResponse, AWSError>;
  /**
   * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation returns information about whether the registrant contact has responded. If you want us to resend the email, use the ResendContactReachabilityEmail operation.
   */
  getContactReachabilityStatus(callback?: (err: AWSError, data: Route53Domains.Types.GetContactReachabilityStatusResponse) => void): Request<Route53Domains.Types.GetContactReachabilityStatusResponse, AWSError>;
  /**
   * This operation returns detailed information about a specified domain that is associated with the current AWS account. Contact information for the domain is also returned as part of the output.
   */
  getDomainDetail(params: Route53Domains.Types.GetDomainDetailRequest, callback?: (err: AWSError, data: Route53Domains.Types.GetDomainDetailResponse) => void): Request<Route53Domains.Types.GetDomainDetailResponse, AWSError>;
  /**
   * This operation returns detailed information about a specified domain that is associated with the current AWS account. Contact information for the domain is also returned as part of the output.
   */
  getDomainDetail(callback?: (err: AWSError, data: Route53Domains.Types.GetDomainDetailResponse) => void): Request<Route53Domains.Types.GetDomainDetailResponse, AWSError>;
  /**
   * The GetDomainSuggestions operation returns a list of suggested domain names.
   */
  getDomainSuggestions(params: Route53Domains.Types.GetDomainSuggestionsRequest, callback?: (err: AWSError, data: Route53Domains.Types.GetDomainSuggestionsResponse) => void): Request<Route53Domains.Types.GetDomainSuggestionsResponse, AWSError>;
  /**
   * The GetDomainSuggestions operation returns a list of suggested domain names.
   */
  getDomainSuggestions(callback?: (err: AWSError, data: Route53Domains.Types.GetDomainSuggestionsResponse) => void): Request<Route53Domains.Types.GetDomainSuggestionsResponse, AWSError>;
  /**
   * This operation returns the current status of an operation that is not completed.
   */
  getOperationDetail(params: Route53Domains.Types.GetOperationDetailRequest, callback?: (err: AWSError, data: Route53Domains.Types.GetOperationDetailResponse) => void): Request<Route53Domains.Types.GetOperationDetailResponse, AWSError>;
  /**
   * This operation returns the current status of an operation that is not completed.
   */
  getOperationDetail(callback?: (err: AWSError, data: Route53Domains.Types.GetOperationDetailResponse) => void): Request<Route53Domains.Types.GetOperationDetailResponse, AWSError>;
  /**
   * This operation returns all the domain names registered with Amazon Route 53 for the current AWS account.
   */
  listDomains(params: Route53Domains.Types.ListDomainsRequest, callback?: (err: AWSError, data: Route53Domains.Types.ListDomainsResponse) => void): Request<Route53Domains.Types.ListDomainsResponse, AWSError>;
  /**
   * This operation returns all the domain names registered with Amazon Route 53 for the current AWS account.
   */
  listDomains(callback?: (err: AWSError, data: Route53Domains.Types.ListDomainsResponse) => void): Request<Route53Domains.Types.ListDomainsResponse, AWSError>;
  /**
   * Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. 
   */
  listOperations(params: Route53Domains.Types.ListOperationsRequest, callback?: (err: AWSError, data: Route53Domains.Types.ListOperationsResponse) => void): Request<Route53Domains.Types.ListOperationsResponse, AWSError>;
  /**
   * Returns information about all of the operations that return an operation ID and that have ever been performed on domains that were registered by the current account. 
   */
  listOperations(callback?: (err: AWSError, data: Route53Domains.Types.ListOperationsResponse) => void): Request<Route53Domains.Types.ListOperationsResponse, AWSError>;
  /**
   * This operation returns all of the tags that are associated with the specified domain. All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.
   */
  listTagsForDomain(params: Route53Domains.Types.ListTagsForDomainRequest, callback?: (err: AWSError, data: Route53Domains.Types.ListTagsForDomainResponse) => void): Request<Route53Domains.Types.ListTagsForDomainResponse, AWSError>;
  /**
   * This operation returns all of the tags that are associated with the specified domain. All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.
   */
  listTagsForDomain(callback?: (err: AWSError, data: Route53Domains.Types.ListTagsForDomainResponse) => void): Request<Route53Domains.Types.ListTagsForDomainResponse, AWSError>;
  /**
   * This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters. When you register a domain, Amazon Route 53 does the following:   Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.   Enables autorenew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.   Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the registrant, admin, and tech contacts.   If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.   Charges your AWS account an amount based on the top-level domain. For more information, see Amazon Route 53 Pricing.  
   */
  registerDomain(params: Route53Domains.Types.RegisterDomainRequest, callback?: (err: AWSError, data: Route53Domains.Types.RegisterDomainResponse) => void): Request<Route53Domains.Types.RegisterDomainResponse, AWSError>;
  /**
   * This operation registers a domain. Domains are registered either by Amazon Registrar (for .com, .net, and .org domains) or by our registrar associate, Gandi (for all other domains). For some top-level domains (TLDs), this operation requires extra parameters. When you register a domain, Amazon Route 53 does the following:   Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers.   Enables autorenew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration.   Optionally enables privacy protection, so WHOIS queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you don't enable privacy protection, WHOIS queries return the information that you entered for the registrant, admin, and tech contacts.   If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email.   Charges your AWS account an amount based on the top-level domain. For more information, see Amazon Route 53 Pricing.  
   */
  registerDomain(callback?: (err: AWSError, data: Route53Domains.Types.RegisterDomainResponse) => void): Request<Route53Domains.Types.RegisterDomainResponse, AWSError>;
  /**
   * Rejects the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using TransferDomainToAnotherAwsAccount.  Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled. 
   */
  rejectDomainTransferFromAnotherAwsAccount(params: Route53Domains.Types.RejectDomainTransferFromAnotherAwsAccountRequest, callback?: (err: AWSError, data: Route53Domains.Types.RejectDomainTransferFromAnotherAwsAccountResponse) => void): Request<Route53Domains.Types.RejectDomainTransferFromAnotherAwsAccountResponse, AWSError>;
  /**
   * Rejects the transfer of a domain from another AWS account to the current AWS account. You initiate a transfer between AWS accounts using TransferDomainToAnotherAwsAccount.  Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled. 
   */
  rejectDomainTransferFromAnotherAwsAccount(callback?: (err: AWSError, data: Route53Domains.Types.RejectDomainTransferFromAnotherAwsAccountResponse) => void): Request<Route53Domains.Types.RejectDomainTransferFromAnotherAwsAccountResponse, AWSError>;
  /**
   * This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account. We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see Renewing Registration for a Domain in the Amazon Route 53 Developer Guide.
   */
  renewDomain(params: Route53Domains.Types.RenewDomainRequest, callback?: (err: AWSError, data: Route53Domains.Types.RenewDomainResponse) => void): Request<Route53Domains.Types.RenewDomainResponse, AWSError>;
  /**
   * This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your AWS account. We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see Renewing Registration for a Domain in the Amazon Route 53 Developer Guide.
   */
  renewDomain(callback?: (err: AWSError, data: Route53Domains.Types.RenewDomainResponse) => void): Request<Route53Domains.Types.RenewDomainResponse, AWSError>;
  /**
   * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.
   */
  resendContactReachabilityEmail(params: Route53Domains.Types.ResendContactReachabilityEmailRequest, callback?: (err: AWSError, data: Route53Domains.Types.ResendContactReachabilityEmailResponse) => void): Request<Route53Domains.Types.ResendContactReachabilityEmailResponse, AWSError>;
  /**
   * For operations that require confirmation that the email address for the registrant contact is valid, such as registering a new domain, this operation resends the confirmation email to the current email address for the registrant contact.
   */
  resendContactReachabilityEmail(callback?: (err: AWSError, data: Route53Domains.Types.ResendContactReachabilityEmailResponse) => void): Request<Route53Domains.Types.ResendContactReachabilityEmailResponse, AWSError>;
  /**
   * This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.
   */
  retrieveDomainAuthCode(params: Route53Domains.Types.RetrieveDomainAuthCodeRequest, callback?: (err: AWSError, data: Route53Domains.Types.RetrieveDomainAuthCodeResponse) => void): Request<Route53Domains.Types.RetrieveDomainAuthCodeResponse, AWSError>;
  /**
   * This operation returns the AuthCode for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.
   */
  retrieveDomainAuthCode(callback?: (err: AWSError, data: Route53Domains.Types.RetrieveDomainAuthCodeResponse) => void): Request<Route53Domains.Types.RetrieveDomainAuthCodeResponse, AWSError>;
  /**
   * Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs). For more information about transferring domains, see the following topics:   For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see Transferring Registration for a Domain to Amazon Route 53 in the Amazon Route 53 Developer Guide.   For information about how to transfer a domain from one AWS account to another, see TransferDomainToAnotherAwsAccount.    For information about how to transfer a domain to another domain registrar, see Transferring a Domain from Amazon Route 53 to Another Registrar in the Amazon Route 53 Developer Guide.   If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.  If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.  If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.
   */
  transferDomain(params: Route53Domains.Types.TransferDomainRequest, callback?: (err: AWSError, data: Route53Domains.Types.TransferDomainResponse) => void): Request<Route53Domains.Types.TransferDomainResponse, AWSError>;
  /**
   * Transfers a domain from another registrar to Amazon Route 53. When the transfer is complete, the domain is registered either with Amazon Registrar (for .com, .net, and .org domains) or with our registrar associate, Gandi (for all other TLDs). For more information about transferring domains, see the following topics:   For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see Transferring Registration for a Domain to Amazon Route 53 in the Amazon Route 53 Developer Guide.   For information about how to transfer a domain from one AWS account to another, see TransferDomainToAnotherAwsAccount.    For information about how to transfer a domain to another domain registrar, see Transferring a Domain from Amazon Route 53 to Another Registrar in the Amazon Route 53 Developer Guide.   If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time.  If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable.  If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.
   */
  transferDomain(callback?: (err: AWSError, data: Route53Domains.Types.TransferDomainResponse) => void): Request<Route53Domains.Types.TransferDomainResponse, AWSError>;
  /**
   * Transfers a domain from the current AWS account to another AWS account. Note the following:   The AWS account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See AcceptDomainTransferFromAnotherAwsAccount.    You can cancel the transfer before the other account accepts it. See CancelDomainTransferToAnotherAwsAccount.    The other account can reject the transfer. See RejectDomainTransferFromAnotherAwsAccount.     When you transfer a domain from one AWS account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another AWS account, see Migrating a Hosted Zone to a Different AWS Account in the Amazon Route 53 Developer Guide.  Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled. 
   */
  transferDomainToAnotherAwsAccount(params: Route53Domains.Types.TransferDomainToAnotherAwsAccountRequest, callback?: (err: AWSError, data: Route53Domains.Types.TransferDomainToAnotherAwsAccountResponse) => void): Request<Route53Domains.Types.TransferDomainToAnotherAwsAccountResponse, AWSError>;
  /**
   * Transfers a domain from the current AWS account to another AWS account. Note the following:   The AWS account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See AcceptDomainTransferFromAnotherAwsAccount.    You can cancel the transfer before the other account accepts it. See CancelDomainTransferToAnotherAwsAccount.    The other account can reject the transfer. See RejectDomainTransferFromAnotherAwsAccount.     When you transfer a domain from one AWS account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another AWS account, see Migrating a Hosted Zone to a Different AWS Account in the Amazon Route 53 Developer Guide.  Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled. 
   */
  transferDomainToAnotherAwsAccount(callback?: (err: AWSError, data: Route53Domains.Types.TransferDomainToAnotherAwsAccountResponse) => void): Request<Route53Domains.Types.TransferDomainToAnotherAwsAccountResponse, AWSError>;
  /**
   * This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical. If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
   */
  updateDomainContact(params: Route53Domains.Types.UpdateDomainContactRequest, callback?: (err: AWSError, data: Route53Domains.Types.UpdateDomainContactResponse) => void): Request<Route53Domains.Types.UpdateDomainContactResponse, AWSError>;
  /**
   * This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical. If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
   */
  updateDomainContact(callback?: (err: AWSError, data: Route53Domains.Types.UpdateDomainContactResponse) => void): Request<Route53Domains.Types.UpdateDomainContactResponse, AWSError>;
  /**
   * This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi. This operation affects only the contact information for the specified contact type (registrant, administrator, or tech). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with GetOperationDetail to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.  By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either UpdateDomainContactPrivacy or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see https://aws.amazon.com/privacy/. 
   */
  updateDomainContactPrivacy(params: Route53Domains.Types.UpdateDomainContactPrivacyRequest, callback?: (err: AWSError, data: Route53Domains.Types.UpdateDomainContactPrivacyResponse) => void): Request<Route53Domains.Types.UpdateDomainContactPrivacyResponse, AWSError>;
  /**
   * This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, contact information such as email address is replaced either with contact information for Amazon Registrar (for .com, .net, and .org domains) or with contact information for our registrar associate, Gandi. This operation affects only the contact information for the specified contact type (registrant, administrator, or tech). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with GetOperationDetail to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email.  By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either UpdateDomainContactPrivacy or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see https://aws.amazon.com/privacy/. 
   */
  updateDomainContactPrivacy(callback?: (err: AWSError, data: Route53Domains.Types.UpdateDomainContactPrivacyResponse) => void): Request<Route53Domains.Types.UpdateDomainContactPrivacyResponse, AWSError>;
  /**
   * This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain. If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
   */
  updateDomainNameservers(params: Route53Domains.Types.UpdateDomainNameserversRequest, callback?: (err: AWSError, data: Route53Domains.Types.UpdateDomainNameserversResponse) => void): Request<Route53Domains.Types.UpdateDomainNameserversResponse, AWSError>;
  /**
   * This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain. If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.
   */
  updateDomainNameservers(callback?: (err: AWSError, data: Route53Domains.Types.UpdateDomainNameserversResponse) => void): Request<Route53Domains.Types.UpdateDomainNameserversResponse, AWSError>;
  /**
   * This operation adds or updates tags for a specified domain. All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.
   */
  updateTagsForDomain(params: Route53Domains.Types.UpdateTagsForDomainRequest, callback?: (err: AWSError, data: Route53Domains.Types.UpdateTagsForDomainResponse) => void): Request<Route53Domains.Types.UpdateTagsForDomainResponse, AWSError>;
  /**
   * This operation adds or updates tags for a specified domain. All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.
   */
  updateTagsForDomain(callback?: (err: AWSError, data: Route53Domains.Types.UpdateTagsForDomainResponse) => void): Request<Route53Domains.Types.UpdateTagsForDomainResponse, AWSError>;
  /**
   * Returns all the domain-related billing records for the current AWS account for a specified period
   */
  viewBilling(params: Route53Domains.Types.ViewBillingRequest, callback?: (err: AWSError, data: Route53Domains.Types.ViewBillingResponse) => void): Request<Route53Domains.Types.ViewBillingResponse, AWSError>;
  /**
   * Returns all the domain-related billing records for the current AWS account for a specified period
   */
  viewBilling(callback?: (err: AWSError, data: Route53Domains.Types.ViewBillingResponse) => void): Request<Route53Domains.Types.ViewBillingResponse, AWSError>;
}
declare namespace Route53Domains {
  export interface AcceptDomainTransferFromAnotherAwsAccountRequest {
    /**
     * The name of the domain that was specified when another AWS account submitted a TransferDomainToAnotherAwsAccount request. 
     */
    DomainName: DomainName;
    /**
     * The password that was returned by the TransferDomainToAnotherAwsAccount request. 
     */
    Password: String;
  }
  export interface AcceptDomainTransferFromAnotherAwsAccountResponse {
    /**
     * Identifier for tracking the progress of the request. To query the operation status, use GetOperationDetail.
     */
    OperationId?: OperationId;
  }
  export type AccountId = string;
  export type AddressLine = string;
  export interface BillingRecord {
    /**
     * The name of the domain that the billing record applies to. If the domain name contains characters other than a-z, 0-9, and - (hyphen), such as an internationalized domain name, then this value is in Punycode. For more information, see DNS Domain Name Format in the Amazon Route 53 Developer Guide.
     */
    DomainName?: DomainName;
    /**
     * The operation that you were charged for.
     */
    Operation?: OperationType;
    /**
     * The ID of the invoice that is associated with the billing record.
     */
    InvoiceId?: InvoiceId;
    /**
     * The date that the operation was billed, in Unix format.
     */
    BillDate?: Timestamp;
    /**
     * The price that you were charged for the operation, in US dollars. Example value: 12.0
     */
    Price?: Price;
  }
  export type BillingRecords = BillingRecord[];
  export type Boolean = boolean;
  export interface CancelDomainTransferToAnotherAwsAccountRequest {
    /**
     * The name of the domain for which you want to cancel the transfer to another AWS account.
     */
    DomainName: DomainName;
  }
  export interface CancelDomainTransferToAnotherAwsAccountResponse {
    /**
     * The identifier that TransferDomainToAnotherAwsAccount returned to track the progress of the request. Because the transfer request was canceled, the value is no longer valid, and you can't use GetOperationDetail to query the operation status.
     */
    OperationId?: OperationId;
  }
  export interface CheckDomainAvailabilityRequest {
    /**
     * The name of the domain that you want to get availability for. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see Domains that You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. The domain name can contain only the following characters:   Letters a through z. Domain names are not case sensitive.   Numbers 0 through 9.   Hyphen (-). You can't specify a hyphen at the beginning or end of a label.    Period (.) to separate the labels in the name, such as the . in example.com.   Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports internationalized domain names, see Domains that You Can Register with Amazon Route 53. For more information, see Formatting Internationalized Domain Names. 
     */
    DomainName: DomainName;
    /**
     * Reserved for future use.
     */
    IdnLangCode?: LangCode;
  }
  export interface CheckDomainAvailabilityResponse {
    /**
     * Whether the domain name is available for registering.  You can register only domains designated as AVAILABLE.  Valid values:  AVAILABLE  The domain name is available.  AVAILABLE_RESERVED  The domain name is reserved under specific conditions.  AVAILABLE_PREORDER  The domain name is available and can be preordered.  DONT_KNOW  The TLD registry didn't reply with a definitive answer about whether the domain name is available. Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance. Try again later.  PENDING  The TLD registry didn't return a response in the expected amount of time. When the response is delayed, it usually takes just a few extra seconds. You can resubmit the request immediately.  RESERVED  The domain name has been reserved for another person or organization.  UNAVAILABLE  The domain name is not available.  UNAVAILABLE_PREMIUM  The domain name is not available.  UNAVAILABLE_RESTRICTED  The domain name is forbidden.  
     */
    Availability: DomainAvailability;
  }
  export interface CheckDomainTransferabilityRequest {
    /**
     * The name of the domain that you want to transfer to Route 53. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see Domains that You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. The domain name can contain only the following characters:   Letters a through z. Domain names are not case sensitive.   Numbers 0 through 9.   Hyphen (-). You can't specify a hyphen at the beginning or end of a label.    Period (.) to separate the labels in the name, such as the . in example.com.  
     */
    DomainName: DomainName;
    /**
     * If the registrar for the top-level domain (TLD) requires an authorization code to transfer the domain, the code that you got from the current registrar for the domain.
     */
    AuthCode?: DomainAuthCode;
  }
  export interface CheckDomainTransferabilityResponse {
    /**
     * A complex type that contains information about whether the specified domain can be transferred to Route 53.
     */
    Transferability: DomainTransferability;
  }
  export type City = string;
  export interface ContactDetail {
    /**
     * First name of contact.
     */
    FirstName?: ContactName;
    /**
     * Last name of contact.
     */
    LastName?: ContactName;
    /**
     * Indicates whether the contact is a person, company, association, or public organization. Note the following:   If you specify a value other than PERSON, you must also specify a value for OrganizationName.   For some TLDs, the privacy protection available depends on the value that you specify for Contact Type. For the privacy protection settings for your TLD, see Domains that You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide    For .es domains, if you specify PERSON, you must specify INDIVIDUAL for the value of ES_LEGAL_FORM.  
     */
    ContactType?: ContactType;
    /**
     * Name of the organization for contact types other than PERSON.
     */
    OrganizationName?: ContactName;
    /**
     * First line of the contact's address.
     */
    AddressLine1?: AddressLine;
    /**
     * Second line of contact's address, if any.
     */
    AddressLine2?: AddressLine;
    /**
     * The city of the contact's address.
     */
    City?: City;
    /**
     * The state or province of the contact's city.
     */
    State?: State;
    /**
     * Code for the country of the contact's address.
     */
    CountryCode?: CountryCode;
    /**
     * The zip or postal code of the contact's address.
     */
    ZipCode?: ZipCode;
    /**
     * The phone number of the contact. Constraints: Phone number must be specified in the format "+[country dialing code].[number including any area code&gt;]". For example, a US phone number might appear as "+1.1234567890".
     */
    PhoneNumber?: ContactNumber;
    /**
     * Email address of the contact.
     */
    Email?: Email;
    /**
     * Fax number of the contact. Constraints: Phone number must be specified in the format "+[country dialing code].[number including any area code]". For example, a US phone number might appear as "+1.1234567890".
     */
    Fax?: ContactNumber;
    /**
     * A list of name-value pairs for parameters required by certain top-level domains.
     */
    ExtraParams?: ExtraParamList;
  }
  export type ContactName = string;
  export type ContactNumber = string;
  export type ContactType = "PERSON"|"COMPANY"|"ASSOCIATION"|"PUBLIC_BODY"|"RESELLER"|string;
  export type CountryCode = "AD"|"AE"|"AF"|"AG"|"AI"|"AL"|"AM"|"AN"|"AO"|"AQ"|"AR"|"AS"|"AT"|"AU"|"AW"|"AZ"|"BA"|"BB"|"BD"|"BE"|"BF"|"BG"|"BH"|"BI"|"BJ"|"BL"|"BM"|"BN"|"BO"|"BR"|"BS"|"BT"|"BW"|"BY"|"BZ"|"CA"|"CC"|"CD"|"CF"|"CG"|"CH"|"CI"|"CK"|"CL"|"CM"|"CN"|"CO"|"CR"|"CU"|"CV"|"CX"|"CY"|"CZ"|"DE"|"DJ"|"DK"|"DM"|"DO"|"DZ"|"EC"|"EE"|"EG"|"ER"|"ES"|"ET"|"FI"|"FJ"|"FK"|"FM"|"FO"|"FR"|"GA"|"GB"|"GD"|"GE"|"GH"|"GI"|"GL"|"GM"|"GN"|"GQ"|"GR"|"GT"|"GU"|"GW"|"GY"|"HK"|"HN"|"HR"|"HT"|"HU"|"ID"|"IE"|"IL"|"IM"|"IN"|"IQ"|"IR"|"IS"|"IT"|"JM"|"JO"|"JP"|"KE"|"KG"|"KH"|"KI"|"KM"|"KN"|"KP"|"KR"|"KW"|"KY"|"KZ"|"LA"|"LB"|"LC"|"LI"|"LK"|"LR"|"LS"|"LT"|"LU"|"LV"|"LY"|"MA"|"MC"|"MD"|"ME"|"MF"|"MG"|"MH"|"MK"|"ML"|"MM"|"MN"|"MO"|"MP"|"MR"|"MS"|"MT"|"MU"|"MV"|"MW"|"MX"|"MY"|"MZ"|"NA"|"NC"|"NE"|"NG"|"NI"|"NL"|"NO"|"NP"|"NR"|"NU"|"NZ"|"OM"|"PA"|"PE"|"PF"|"PG"|"PH"|"PK"|"PL"|"PM"|"PN"|"PR"|"PT"|"PW"|"PY"|"QA"|"RO"|"RS"|"RU"|"RW"|"SA"|"SB"|"SC"|"SD"|"SE"|"SG"|"SH"|"SI"|"SK"|"SL"|"SM"|"SN"|"SO"|"SR"|"ST"|"SV"|"SY"|"SZ"|"TC"|"TD"|"TG"|"TH"|"TJ"|"TK"|"TL"|"TM"|"TN"|"TO"|"TR"|"TT"|"TV"|"TW"|"TZ"|"UA"|"UG"|"US"|"UY"|"UZ"|"VA"|"VC"|"VE"|"VG"|"VI"|"VN"|"VU"|"WF"|"WS"|"YE"|"YT"|"ZA"|"ZM"|"ZW"|string;
  export type CurrentExpiryYear = number;
  export type DNSSec = string;
  export interface DeleteTagsForDomainRequest {
    /**
     * The domain for which you want to delete one or more tags.
     */
    DomainName: DomainName;
    /**
     * A list of tag keys to delete.
     */
    TagsToDelete: TagKeyList;
  }
  export interface DeleteTagsForDomainResponse {
  }
  export interface DisableDomainAutoRenewRequest {
    /**
     * The name of the domain that you want to disable automatic renewal for.
     */
    DomainName: DomainName;
  }
  export interface DisableDomainAutoRenewResponse {
  }
  export interface DisableDomainTransferLockRequest {
    /**
     * The name of the domain that you want to remove the transfer lock for.
     */
    DomainName: DomainName;
  }
  export interface DisableDomainTransferLockResponse {
    /**
     * Identifier for tracking the progress of the request. To query the operation status, use GetOperationDetail.
     */
    OperationId: OperationId;
  }
  export type DomainAuthCode = string;
  export type DomainAvailability = "AVAILABLE"|"AVAILABLE_RESERVED"|"AVAILABLE_PREORDER"|"UNAVAILABLE"|"UNAVAILABLE_PREMIUM"|"UNAVAILABLE_RESTRICTED"|"RESERVED"|"DONT_KNOW"|string;
  export type DomainName = string;
  export type DomainStatus = string;
  export type DomainStatusList = DomainStatus[];
  export interface DomainSuggestion {
    /**
     * A suggested domain name.
     */
    DomainName?: DomainName;
    /**
     * Whether the domain name is available for registering.  You can register only the domains that are designated as AVAILABLE.  Valid values:  AVAILABLE  The domain name is available.  AVAILABLE_RESERVED  The domain name is reserved under specific conditions.  AVAILABLE_PREORDER  The domain name is available and can be preordered.  DONT_KNOW  The TLD registry didn't reply with a definitive answer about whether the domain name is available. Route 53 can return this response for a variety of reasons, for example, the registry is performing maintenance. Try again later.  PENDING  The TLD registry didn't return a response in the expected amount of time. When the response is delayed, it usually takes just a few extra seconds. You can resubmit the request immediately.  RESERVED  The domain name has been reserved for another person or organization.  UNAVAILABLE  The domain name is not available.  UNAVAILABLE_PREMIUM  The domain name is not available.  UNAVAILABLE_RESTRICTED  The domain name is forbidden.  
     */
    Availability?: String;
  }
  export type DomainSuggestionsList = DomainSuggestion[];
  export interface DomainSummary {
    /**
     * The name of the domain that the summary information applies to.
     */
    DomainName: DomainName;
    /**
     * Indicates whether the domain is automatically renewed upon expiration.
     */
    AutoRenew?: Boolean;
    /**
     * Indicates whether a domain is locked from unauthorized transfer to another party.
     */
    TransferLock?: Boolean;
    /**
     * Expiration date of the domain in Unix time format and Coordinated Universal Time (UTC).
     */
    Expiry?: Timestamp;
  }
  export type DomainSummaryList = DomainSummary[];
  export interface DomainTransferability {
    Transferable?: Transferable;
  }
  export type DurationInYears = number;
  export type Email = string;
  export interface EnableDomainAutoRenewRequest {
    /**
     * The name of the domain that you want to enable automatic renewal for.
     */
    DomainName: DomainName;
  }
  export interface EnableDomainAutoRenewResponse {
  }
  export interface EnableDomainTransferLockRequest {
    /**
     * The name of the domain that you want to set the transfer lock for.
     */
    DomainName: DomainName;
  }
  export interface EnableDomainTransferLockResponse {
    /**
     * Identifier for tracking the progress of the request. To use this ID to query the operation status, use GetOperationDetail.
     */
    OperationId: OperationId;
  }
  export type ErrorMessage = string;
  export interface ExtraParam {
    /**
     * The name of an additional parameter that is required by a top-level domain. Here are the top-level domains that require additional parameters and the names of the parameters that they require:  .com.au and .net.au     AU_ID_NUMBER     AU_ID_TYPE  Valid values include the following:    ABN (Australian business number)    ACN (Australian company number)    TM (Trademark number)      .ca     BRAND_NUMBER     CA_BUSINESS_ENTITY_TYPE  Valid values include the following:    BANK (Bank)    COMMERCIAL_COMPANY (Commercial company)    COMPANY (Company)    COOPERATION (Cooperation)    COOPERATIVE (Cooperative)    COOPRIX (Cooprix)    CORP (Corporation)    CREDIT_UNION (Credit union)    FOMIA (Federation of mutual insurance associations)    INC (Incorporated)    LTD (Limited)    LTEE (Limitée)    LLC (Limited liability corporation)    LLP (Limited liability partnership)    LTE (Lte.)    MBA (Mutual benefit association)    MIC (Mutual insurance company)    NFP (Not-for-profit corporation)    SA (S.A.)    SAVINGS_COMPANY (Savings company)    SAVINGS_UNION (Savings union)    SARL (Société à responsabilité limitée)    TRUST (Trust)    ULC (Unlimited liability corporation)      CA_LEGAL_TYPE  When ContactType is PERSON, valid values include the following:    ABO (Aboriginal Peoples indigenous to Canada)    CCT (Canadian citizen)    LGR (Legal Representative of a Canadian Citizen or Permanent Resident)    RES (Permanent resident of Canada)   When ContactType is a value other than PERSON, valid values include the following:    ASS (Canadian unincorporated association)    CCO (Canadian corporation)    EDU (Canadian educational institution)    GOV (Government or government entity in Canada)    HOP (Canadian Hospital)    INB (Indian Band recognized by the Indian Act of Canada)    LAM (Canadian Library, Archive, or Museum)    MAJ (Her/His Majesty the Queen/King)    OMK (Official mark registered in Canada)    PLT (Canadian Political Party)    PRT (Partnership Registered in Canada)    TDM (Trademark registered in Canada)    TRD (Canadian Trade Union)    TRS (Trust established in Canada)      .es     ES_IDENTIFICATION  Specify the applicable value:    For contacts inside Spain: Enter your passport ID.    For contacts outside of Spain: Enter the VAT identification number for the company.  For .es domains, the value of ContactType must be PERSON.       ES_IDENTIFICATION_TYPE  Valid values include the following:    DNI_AND_NIF (For Spanish contacts)    NIE (For foreigners with legal residence)    OTHER (For contacts outside of Spain)      ES_LEGAL_FORM  Valid values include the following:    ASSOCIATION     CENTRAL_GOVERNMENT_BODY     CIVIL_SOCIETY     COMMUNITY_OF_OWNERS     COMMUNITY_PROPERTY     CONSULATE     COOPERATIVE     DESIGNATION_OF_ORIGIN_SUPERVISORY_COUNCIL     ECONOMIC_INTEREST_GROUP     EMBASSY     ENTITY_MANAGING_NATURAL_AREAS     FARM_PARTNERSHIP     FOUNDATION     GENERAL_AND_LIMITED_PARTNERSHIP     GENERAL_PARTNERSHIP     INDIVIDUAL     LIMITED_COMPANY     LOCAL_AUTHORITY     LOCAL_PUBLIC_ENTITY     MUTUAL_INSURANCE_COMPANY     NATIONAL_PUBLIC_ENTITY     ORDER_OR_RELIGIOUS_INSTITUTION     OTHERS (Only for contacts outside of Spain)     POLITICAL_PARTY     PROFESSIONAL_ASSOCIATION     PUBLIC_LAW_ASSOCIATION     PUBLIC_LIMITED_COMPANY     REGIONAL_GOVERNMENT_BODY     REGIONAL_PUBLIC_ENTITY     SAVINGS_BANK     SPANISH_OFFICE     SPORTS_ASSOCIATION     SPORTS_FEDERATION     SPORTS_LIMITED_COMPANY     TEMPORARY_ALLIANCE_OF_ENTERPRISES     TRADE_UNION     WORKER_OWNED_COMPANY     WORKER_OWNED_LIMITED_COMPANY       .fi     BIRTH_DATE_IN_YYYY_MM_DD     FI_BUSINESS_NUMBER     FI_ID_NUMBER     FI_NATIONALITY  Valid values include the following:    FINNISH     NOT_FINNISH       FI_ORGANIZATION_TYPE  Valid values include the following:    COMPANY     CORPORATION     GOVERNMENT     INSTITUTION     POLITICAL_PARTY     PUBLIC_COMMUNITY     TOWNSHIP       .fr     BIRTH_CITY     BIRTH_COUNTRY     BIRTH_DATE_IN_YYYY_MM_DD     BIRTH_DEPARTMENT: Specify the INSEE code that corresponds with the department where the contact was born. If the contact was born somewhere other than France or its overseas departments, specify 99. For more information, including a list of departments and the corresponding INSEE numbers, see the Wikipedia entry Departments of France.    BRAND_NUMBER     .it     IT_NATIONALITY     IT_PIN     IT_REGISTRANT_ENTITY_TYPE  Valid values include the following:    FOREIGNERS     FREELANCE_WORKERS (Freelance workers and professionals)    ITALIAN_COMPANIES (Italian companies and one-person companies)    NON_PROFIT_ORGANIZATIONS     OTHER_SUBJECTS     PUBLIC_ORGANIZATIONS       .ru     BIRTH_DATE_IN_YYYY_MM_DD     RU_PASSPORT_DATA     .se     BIRTH_COUNTRY     SE_ID_NUMBER     .sg     SG_ID_NUMBER     .co.uk, .me.uk, and .org.uk     UK_CONTACT_TYPE  Valid values include the following:    CRC (UK Corporation by Royal Charter)    FCORP (Non-UK Corporation)    FIND (Non-UK Individual, representing self)    FOTHER (Non-UK Entity that does not fit into any other category)    GOV (UK Government Body)    IND (UK Individual (representing self))    IP (UK Industrial/Provident Registered Company)    LLP (UK Limited Liability Partnership)    LTD (UK Limited Company)    OTHER (UK Entity that does not fit into any other category)    PLC (UK Public Limited Company)    PTNR (UK Partnership)    RCHAR (UK Registered Charity)    SCH (UK School)    STAT (UK Statutory Body)    STRA (UK Sole Trader)      UK_COMPANY_NUMBER      In addition, many TLDs require a VAT_NUMBER.
     */
    Name: ExtraParamName;
    /**
     * The value that corresponds with the name of an extra parameter.
     */
    Value: ExtraParamValue;
  }
  export type ExtraParamList = ExtraParam[];
  export type ExtraParamName = "DUNS_NUMBER"|"BRAND_NUMBER"|"BIRTH_DEPARTMENT"|"BIRTH_DATE_IN_YYYY_MM_DD"|"BIRTH_COUNTRY"|"BIRTH_CITY"|"DOCUMENT_NUMBER"|"AU_ID_NUMBER"|"AU_ID_TYPE"|"CA_LEGAL_TYPE"|"CA_BUSINESS_ENTITY_TYPE"|"CA_LEGAL_REPRESENTATIVE"|"CA_LEGAL_REPRESENTATIVE_CAPACITY"|"ES_IDENTIFICATION"|"ES_IDENTIFICATION_TYPE"|"ES_LEGAL_FORM"|"FI_BUSINESS_NUMBER"|"FI_ID_NUMBER"|"FI_NATIONALITY"|"FI_ORGANIZATION_TYPE"|"IT_NATIONALITY"|"IT_PIN"|"IT_REGISTRANT_ENTITY_TYPE"|"RU_PASSPORT_DATA"|"SE_ID_NUMBER"|"SG_ID_NUMBER"|"VAT_NUMBER"|"UK_CONTACT_TYPE"|"UK_COMPANY_NUMBER"|string;
  export type ExtraParamValue = string;
  export type FIAuthKey = string;
  export interface GetContactReachabilityStatusRequest {
    /**
     * The name of the domain for which you want to know whether the registrant contact has confirmed that the email address is valid.
     */
    domainName?: DomainName;
  }
  export interface GetContactReachabilityStatusResponse {
    /**
     * The domain name for which you requested the reachability status.
     */
    domainName?: DomainName;
    /**
     * Whether the registrant contact has responded. Values include the following:  PENDING  We sent the confirmation email and haven't received a response yet.  DONE  We sent the email and got confirmation from the registrant contact.  EXPIRED  The time limit expired before the registrant contact responded.  
     */
    status?: ReachabilityStatus;
  }
  export interface GetDomainDetailRequest {
    /**
     * The name of the domain that you want to get detailed information about.
     */
    DomainName: DomainName;
  }
  export interface GetDomainDetailResponse {
    /**
     * The name of a domain.
     */
    DomainName: DomainName;
    /**
     * The name of the domain.
     */
    Nameservers: NameserverList;
    /**
     * Specifies whether the domain registration is set to renew automatically.
     */
    AutoRenew?: Boolean;
    /**
     * Provides details about the domain administrative contact.
     */
    AdminContact: ContactDetail;
    /**
     * Provides details about the domain registrant.
     */
    RegistrantContact: ContactDetail;
    /**
     * Provides details about the domain technical contact.
     */
    TechContact: ContactDetail;
    /**
     * Specifies whether contact information is concealed from WHOIS queries. If the value is true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If the value is false, WHOIS queries return the information that you entered for the admin contact.
     */
    AdminPrivacy?: Boolean;
    /**
     * Specifies whether contact information is concealed from WHOIS queries. If the value is true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If the value is false, WHOIS queries return the information that you entered for the registrant contact (domain owner).
     */
    RegistrantPrivacy?: Boolean;
    /**
     * Specifies whether contact information is concealed from WHOIS queries. If the value is true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If the value is false, WHOIS queries return the information that you entered for the technical contact.
     */
    TechPrivacy?: Boolean;
    /**
     * Name of the registrar of the domain as identified in the registry. Domains with a .com, .net, or .org TLD are registered by Amazon Registrar. All other domains are registered by our registrar associate, Gandi. The value for domains that are registered by Gandi is "GANDI SAS". 
     */
    RegistrarName?: RegistrarName;
    /**
     * The fully qualified name of the WHOIS server that can answer the WHOIS query for the domain.
     */
    WhoIsServer?: RegistrarWhoIsServer;
    /**
     * Web address of the registrar.
     */
    RegistrarUrl?: RegistrarUrl;
    /**
     * Email address to contact to report incorrect contact information for a domain, to report that the domain is being used to send spam, to report that someone is cybersquatting on a domain name, or report some other type of abuse.
     */
    AbuseContactEmail?: Email;
    /**
     * Phone number for reporting abuse.
     */
    AbuseContactPhone?: ContactNumber;
    /**
     * Reserved for future use.
     */
    RegistryDomainId?: RegistryDomainId;
    /**
     * The date when the domain was created as found in the response to a WHOIS query. The date and time is in Unix time format and Coordinated Universal time (UTC).
     */
    CreationDate?: Timestamp;
    /**
     * The last updated date of the domain as found in the response to a WHOIS query. The date and time is in Unix time format and Coordinated Universal time (UTC).
     */
    UpdatedDate?: Timestamp;
    /**
     * The date when the registration for the domain is set to expire. The date and time is in Unix time format and Coordinated Universal time (UTC).
     */
    ExpirationDate?: Timestamp;
    /**
     * Reseller of the domain. Domains registered or transferred using Route 53 domains will have "Amazon" as the reseller. 
     */
    Reseller?: Reseller;
    /**
     * Reserved for future use.
     */
    DnsSec?: DNSSec;
    /**
     * An array of domain name status codes, also known as Extensible Provisioning Protocol (EPP) status codes. ICANN, the organization that maintains a central database of domain names, has developed a set of domain name status codes that tell you the status of a variety of operations on a domain name, for example, registering a domain name, transferring a domain name to another registrar, renewing the registration for a domain name, and so on. All registrars use this same set of status codes. For a current list of domain name status codes and an explanation of what each code means, go to the ICANN website and search for epp status codes. (Search on the ICANN website; web searches sometimes return an old version of the document.)
     */
    StatusList?: DomainStatusList;
  }
  export interface GetDomainSuggestionsRequest {
    /**
     * A domain name that you want to use as the basis for a list of possible domain names. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see Domains that You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. The domain name can contain only the following characters:   Letters a through z. Domain names are not case sensitive.   Numbers 0 through 9.   Hyphen (-). You can't specify a hyphen at the beginning or end of a label.    Period (.) to separate the labels in the name, such as the . in example.com.   Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports internationalized domain names, see Domains that You Can Register with Amazon Route 53. 
     */
    DomainName: DomainName;
    /**
     * The number of suggested domain names that you want Route 53 to return. Specify a value between 1 and 50.
     */
    SuggestionCount: Integer;
    /**
     * If OnlyAvailable is true, Route 53 returns only domain names that are available. If OnlyAvailable is false, Route 53 returns domain names without checking whether they're available to be registered. To determine whether the domain is available, you can call checkDomainAvailability for each suggestion.
     */
    OnlyAvailable: Boolean;
  }
  export interface GetDomainSuggestionsResponse {
    /**
     * A list of possible domain names. If you specified true for OnlyAvailable in the request, the list contains only domains that are available for registration.
     */
    SuggestionsList?: DomainSuggestionsList;
  }
  export interface GetOperationDetailRequest {
    /**
     * The identifier for the operation for which you want to get the status. Route 53 returned the identifier in the response to the original request.
     */
    OperationId: OperationId;
  }
  export interface GetOperationDetailResponse {
    /**
     * The identifier for the operation.
     */
    OperationId?: OperationId;
    /**
     * The current status of the requested operation in the system.
     */
    Status?: OperationStatus;
    /**
     * Detailed information on the status including possible errors.
     */
    Message?: ErrorMessage;
    /**
     * The name of a domain.
     */
    DomainName?: DomainName;
    /**
     * The type of operation that was requested.
     */
    Type?: OperationType;
    /**
     * The date when the request was submitted.
     */
    SubmittedDate?: Timestamp;
  }
  export type GlueIp = string;
  export type GlueIpList = GlueIp[];
  export type HostName = string;
  export type Integer = number;
  export type InvoiceId = string;
  export type LangCode = string;
  export interface ListDomainsRequest {
    /**
     * For an initial request for a list of domains, omit this element. If the number of domains that are associated with the current AWS account is greater than the value that you specified for MaxItems, you can use Marker to return additional domains. Get the value of NextPageMarker from the previous response, and submit another request that includes the value of NextPageMarker in the Marker element. Constraints: The marker must match the value specified in the previous request.
     */
    Marker?: PageMarker;
    /**
     * Number of domains to be returned. Default: 20
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListDomainsResponse {
    /**
     * A summary of domains.
     */
    Domains: DomainSummaryList;
    /**
     * If there are more domains than you specified for MaxItems in the request, submit another request and include the value of NextPageMarker in the value of Marker.
     */
    NextPageMarker?: PageMarker;
  }
  export interface ListOperationsRequest {
    /**
     * An optional parameter that lets you get information about all the operations that you submitted after a specified date and time. Specify the date and time in Unix time format and Coordinated Universal time (UTC).
     */
    SubmittedSince?: Timestamp;
    /**
     * For an initial request for a list of operations, omit this element. If the number of operations that are not yet complete is greater than the value that you specified for MaxItems, you can use Marker to return additional operations. Get the value of NextPageMarker from the previous response, and submit another request that includes the value of NextPageMarker in the Marker element.
     */
    Marker?: PageMarker;
    /**
     * Number of domains to be returned. Default: 20
     */
    MaxItems?: PageMaxItems;
  }
  export interface ListOperationsResponse {
    /**
     * Lists summaries of the operations.
     */
    Operations: OperationSummaryList;
    /**
     * If there are more operations than you specified for MaxItems in the request, submit another request and include the value of NextPageMarker in the value of Marker.
     */
    NextPageMarker?: PageMarker;
  }
  export interface ListTagsForDomainRequest {
    /**
     * The domain for which you want to get a list of tags.
     */
    DomainName: DomainName;
  }
  export interface ListTagsForDomainResponse {
    /**
     * A list of the tags that are associated with the specified domain.
     */
    TagList: TagList;
  }
  export interface Nameserver {
    /**
     * The fully qualified host name of the name server. Constraint: Maximum 255 characters
     */
    Name: HostName;
    /**
     * Glue IP address of a name server entry. Glue IP addresses are required only when the name of the name server is a subdomain of the domain. For example, if your domain is example.com and the name server for the domain is ns.example.com, you need to specify the IP address for ns.example.com. Constraints: The list can contain only one IPv4 and one IPv6 address.
     */
    GlueIps?: GlueIpList;
  }
  export type NameserverList = Nameserver[];
  export type OperationId = string;
  export type OperationStatus = "SUBMITTED"|"IN_PROGRESS"|"ERROR"|"SUCCESSFUL"|"FAILED"|string;
  export interface OperationSummary {
    /**
     * Identifier returned to track the requested action.
     */
    OperationId: OperationId;
    /**
     * The current status of the requested operation in the system.
     */
    Status: OperationStatus;
    /**
     * Type of the action requested.
     */
    Type: OperationType;
    /**
     * The date when the request was submitted.
     */
    SubmittedDate: Timestamp;
  }
  export type OperationSummaryList = OperationSummary[];
  export type OperationType = "REGISTER_DOMAIN"|"DELETE_DOMAIN"|"TRANSFER_IN_DOMAIN"|"UPDATE_DOMAIN_CONTACT"|"UPDATE_NAMESERVER"|"CHANGE_PRIVACY_PROTECTION"|"DOMAIN_LOCK"|"ENABLE_AUTORENEW"|"DISABLE_AUTORENEW"|"ADD_DNSSEC"|"REMOVE_DNSSEC"|"EXPIRE_DOMAIN"|"TRANSFER_OUT_DOMAIN"|"CHANGE_DOMAIN_OWNER"|"RENEW_DOMAIN"|"PUSH_DOMAIN"|"INTERNAL_TRANSFER_OUT_DOMAIN"|"INTERNAL_TRANSFER_IN_DOMAIN"|string;
  export type PageMarker = string;
  export type PageMaxItems = number;
  export type Price = number;
  export type ReachabilityStatus = "PENDING"|"DONE"|"EXPIRED"|string;
  export interface RegisterDomainRequest {
    /**
     * The domain name that you want to register. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see Domains that You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. The domain name can contain only the following characters:   Letters a through z. Domain names are not case sensitive.   Numbers 0 through 9.   Hyphen (-). You can't specify a hyphen at the beginning or end of a label.    Period (.) to separate the labels in the name, such as the . in example.com.   Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports internationalized domain names, see Domains that You Can Register with Amazon Route 53. For more information, see Formatting Internationalized Domain Names. 
     */
    DomainName: DomainName;
    /**
     * Reserved for future use.
     */
    IdnLangCode?: LangCode;
    /**
     * The number of years that you want to register the domain for. Domains are registered for a minimum of one year. The maximum period depends on the top-level domain. For the range of valid values for your domain, see Domains that You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. Default: 1
     */
    DurationInYears: DurationInYears;
    /**
     * Indicates whether the domain will be automatically renewed (true) or not (false). Autorenewal only takes effect after the account is charged. Default: true 
     */
    AutoRenew?: Boolean;
    /**
     * Provides detailed contact information. For information about the values that you specify for each element, see ContactDetail.
     */
    AdminContact: ContactDetail;
    /**
     * Provides detailed contact information. For information about the values that you specify for each element, see ContactDetail.
     */
    RegistrantContact: ContactDetail;
    /**
     * Provides detailed contact information. For information about the values that you specify for each element, see ContactDetail.
     */
    TechContact: ContactDetail;
    /**
     * Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify false, WHOIS queries return the information that you entered for the admin contact. Default: true 
     */
    PrivacyProtectAdminContact?: Boolean;
    /**
     * Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify false, WHOIS queries return the information that you entered for the registrant contact (the domain owner). Default: true 
     */
    PrivacyProtectRegistrantContact?: Boolean;
    /**
     * Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify false, WHOIS queries return the information that you entered for the technical contact. Default: true 
     */
    PrivacyProtectTechContact?: Boolean;
  }
  export interface RegisterDomainResponse {
    /**
     * Identifier for tracking the progress of the request. To query the operation status, use GetOperationDetail.
     */
    OperationId: OperationId;
  }
  export type RegistrarName = string;
  export type RegistrarUrl = string;
  export type RegistrarWhoIsServer = string;
  export type RegistryDomainId = string;
  export interface RejectDomainTransferFromAnotherAwsAccountRequest {
    /**
     * The name of the domain that was specified when another AWS account submitted a TransferDomainToAnotherAwsAccount request. 
     */
    DomainName: DomainName;
  }
  export interface RejectDomainTransferFromAnotherAwsAccountResponse {
    /**
     * The identifier that TransferDomainToAnotherAwsAccount returned to track the progress of the request. Because the transfer request was rejected, the value is no longer valid, and you can't use GetOperationDetail to query the operation status.
     */
    OperationId?: OperationId;
  }
  export interface RenewDomainRequest {
    /**
     * The name of the domain that you want to renew.
     */
    DomainName: DomainName;
    /**
     * The number of years that you want to renew the domain for. The maximum number of years depends on the top-level domain. For the range of valid values for your domain, see Domains that You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. Default: 1
     */
    DurationInYears?: DurationInYears;
    /**
     * The year when the registration for the domain is set to expire. This value must match the current expiration date for the domain.
     */
    CurrentExpiryYear: CurrentExpiryYear;
  }
  export interface RenewDomainResponse {
    /**
     * Identifier for tracking the progress of the request. To query the operation status, use GetOperationDetail.
     */
    OperationId: OperationId;
  }
  export type Reseller = string;
  export interface ResendContactReachabilityEmailRequest {
    /**
     * The name of the domain for which you want Route 53 to resend a confirmation email to the registrant contact.
     */
    domainName?: DomainName;
  }
  export interface ResendContactReachabilityEmailResponse {
    /**
     * The domain name for which you requested a confirmation email.
     */
    domainName?: DomainName;
    /**
     * The email address for the registrant contact at the time that we sent the verification email.
     */
    emailAddress?: Email;
    /**
     *  True if the email address for the registrant contact has already been verified, and false otherwise. If the email address has already been verified, we don't send another confirmation email.
     */
    isAlreadyVerified?: Boolean;
  }
  export interface RetrieveDomainAuthCodeRequest {
    /**
     * The name of the domain that you want to get an authorization code for.
     */
    DomainName: DomainName;
  }
  export interface RetrieveDomainAuthCodeResponse {
    /**
     * The authorization code for the domain.
     */
    AuthCode: DomainAuthCode;
  }
  export type State = string;
  export type String = string;
  export interface Tag {
    /**
     * The key (name) of a tag. Valid values: A-Z, a-z, 0-9, space, ".:/=+\-@" Constraints: Each key can be 1-128 characters long.
     */
    Key?: TagKey;
    /**
     * The value of a tag. Valid values: A-Z, a-z, 0-9, space, ".:/=+\-@" Constraints: Each value can be 0-256 characters long.
     */
    Value?: TagValue;
  }
  export type TagKey = string;
  export type TagKeyList = TagKey[];
  export type TagList = Tag[];
  export type TagValue = string;
  export type Timestamp = Date;
  export interface TransferDomainRequest {
    /**
     * The name of the domain that you want to transfer to Route 53. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see Domains that You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. The domain name can contain only the following characters:   Letters a through z. Domain names are not case sensitive.   Numbers 0 through 9.   Hyphen (-). You can't specify a hyphen at the beginning or end of a label.    Period (.) to separate the labels in the name, such as the . in example.com.  
     */
    DomainName: DomainName;
    /**
     * Reserved for future use.
     */
    IdnLangCode?: LangCode;
    /**
     * The number of years that you want to register the domain for. Domains are registered for a minimum of one year. The maximum period depends on the top-level domain. Default: 1
     */
    DurationInYears: DurationInYears;
    /**
     * Contains details for the host and glue IP addresses.
     */
    Nameservers?: NameserverList;
    /**
     * The authorization code for the domain. You get this value from the current registrar.
     */
    AuthCode?: DomainAuthCode;
    /**
     * Indicates whether the domain will be automatically renewed (true) or not (false). Autorenewal only takes effect after the account is charged. Default: true
     */
    AutoRenew?: Boolean;
    /**
     * Provides detailed contact information.
     */
    AdminContact: ContactDetail;
    /**
     * Provides detailed contact information.
     */
    RegistrantContact: ContactDetail;
    /**
     * Provides detailed contact information.
     */
    TechContact: ContactDetail;
    /**
     * Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify false, WHOIS queries return the information that you entered for the admin contact. Default: true 
     */
    PrivacyProtectAdminContact?: Boolean;
    /**
     * Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify false, WHOIS queries return the information that you entered for the registrant contact (domain owner). Default: true 
     */
    PrivacyProtectRegistrantContact?: Boolean;
    /**
     * Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify false, WHOIS queries return the information that you entered for the technical contact. Default: true 
     */
    PrivacyProtectTechContact?: Boolean;
  }
  export interface TransferDomainResponse {
    /**
     * Identifier for tracking the progress of the request. To query the operation status, use GetOperationDetail.
     */
    OperationId: OperationId;
  }
  export interface TransferDomainToAnotherAwsAccountRequest {
    /**
     * The name of the domain that you want to transfer from the current AWS account to another account.
     */
    DomainName: DomainName;
    /**
     * The account ID of the AWS account that you want to transfer the domain to, for example, 111122223333.
     */
    AccountId: AccountId;
  }
  export interface TransferDomainToAnotherAwsAccountResponse {
    /**
     * Identifier for tracking the progress of the request. To query the operation status, use GetOperationDetail.
     */
    OperationId?: OperationId;
    /**
     * To finish transferring a domain to another AWS account, the account that the domain is being transferred to must submit an AcceptDomainTransferFromAnotherAwsAccount request. The request must include the value of the Password element that was returned in the TransferDomainToAnotherAwsAccount response.
     */
    Password?: String;
  }
  export type Transferable = "TRANSFERABLE"|"UNTRANSFERABLE"|"DONT_KNOW"|string;
  export interface UpdateDomainContactPrivacyRequest {
    /**
     * The name of the domain that you want to update the privacy setting for.
     */
    DomainName: DomainName;
    /**
     * Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify false, WHOIS queries return the information that you entered for the admin contact.
     */
    AdminPrivacy?: Boolean;
    /**
     * Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify false, WHOIS queries return the information that you entered for the registrant contact (domain owner).
     */
    RegistrantPrivacy?: Boolean;
    /**
     * Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar (for .com, .net, and .org domains) or for our registrar associate, Gandi (for all other TLDs). If you specify false, WHOIS queries return the information that you entered for the technical contact.
     */
    TechPrivacy?: Boolean;
  }
  export interface UpdateDomainContactPrivacyResponse {
    /**
     * Identifier for tracking the progress of the request. To use this ID to query the operation status, use GetOperationDetail.
     */
    OperationId: OperationId;
  }
  export interface UpdateDomainContactRequest {
    /**
     * The name of the domain that you want to update contact information for.
     */
    DomainName: DomainName;
    /**
     * Provides detailed contact information.
     */
    AdminContact?: ContactDetail;
    /**
     * Provides detailed contact information.
     */
    RegistrantContact?: ContactDetail;
    /**
     * Provides detailed contact information.
     */
    TechContact?: ContactDetail;
  }
  export interface UpdateDomainContactResponse {
    /**
     * Identifier for tracking the progress of the request. To query the operation status, use GetOperationDetail.
     */
    OperationId: OperationId;
  }
  export interface UpdateDomainNameserversRequest {
    /**
     * The name of the domain that you want to change name servers for.
     */
    DomainName: DomainName;
    /**
     * The authorization key for .fi domains
     */
    FIAuthKey?: FIAuthKey;
    /**
     * A list of new name servers for the domain.
     */
    Nameservers: NameserverList;
  }
  export interface UpdateDomainNameserversResponse {
    /**
     * Identifier for tracking the progress of the request. To query the operation status, use GetOperationDetail.
     */
    OperationId: OperationId;
  }
  export interface UpdateTagsForDomainRequest {
    /**
     * The domain for which you want to add or update tags.
     */
    DomainName: DomainName;
    /**
     * A list of the tag keys and values that you want to add or update. If you specify a key that already exists, the corresponding value will be replaced.
     */
    TagsToUpdate?: TagList;
  }
  export interface UpdateTagsForDomainResponse {
  }
  export interface ViewBillingRequest {
    /**
     * The beginning date and time for the time period for which you want a list of billing records. Specify the date and time in Unix time format and Coordinated Universal time (UTC).
     */
    Start?: Timestamp;
    /**
     * The end date and time for the time period for which you want a list of billing records. Specify the date and time in Unix time format and Coordinated Universal time (UTC).
     */
    End?: Timestamp;
    /**
     * For an initial request for a list of billing records, omit this element. If the number of billing records that are associated with the current AWS account during the specified period is greater than the value that you specified for MaxItems, you can use Marker to return additional billing records. Get the value of NextPageMarker from the previous response, and submit another request that includes the value of NextPageMarker in the Marker element.  Constraints: The marker must match the value of NextPageMarker that was returned in the previous response.
     */
    Marker?: PageMarker;
    /**
     * The number of billing records to be returned. Default: 20
     */
    MaxItems?: PageMaxItems;
  }
  export interface ViewBillingResponse {
    /**
     * If there are more billing records than you specified for MaxItems in the request, submit another request and include the value of NextPageMarker in the value of Marker.
     */
    NextPageMarker?: PageMarker;
    /**
     * A summary of billing records.
     */
    BillingRecords?: BillingRecords;
  }
  export type ZipCode = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2014-05-15"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Route53Domains client.
   */
  export import Types = Route53Domains;
}
export = Route53Domains;
