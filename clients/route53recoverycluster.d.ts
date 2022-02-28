import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class Route53RecoveryCluster extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: Route53RecoveryCluster.Types.ClientConfiguration)
  config: Config & Route53RecoveryCluster.Types.ClientConfiguration;
  /**
   * Get the state for a routing control. A routing control is a simple on/off switch that you can use to route traffic to cells. When the state is On, traffic flows to a cell. When it's Off, traffic does not flow.  Before you can create a routing control, you must first create a cluster to host the control in a control panel. For more information, see  Create routing control structures in the Amazon Route 53 Application Recovery Controller Developer Guide. Then you access one of the endpoints for the cluster to get or update the routing control state to redirect traffic.   You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Application Recovery Controller.  To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide. Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide:     Viewing and updating routing control states     Working with routing controls overall   
   */
  getRoutingControlState(params: Route53RecoveryCluster.Types.GetRoutingControlStateRequest, callback?: (err: AWSError, data: Route53RecoveryCluster.Types.GetRoutingControlStateResponse) => void): Request<Route53RecoveryCluster.Types.GetRoutingControlStateResponse, AWSError>;
  /**
   * Get the state for a routing control. A routing control is a simple on/off switch that you can use to route traffic to cells. When the state is On, traffic flows to a cell. When it's Off, traffic does not flow.  Before you can create a routing control, you must first create a cluster to host the control in a control panel. For more information, see  Create routing control structures in the Amazon Route 53 Application Recovery Controller Developer Guide. Then you access one of the endpoints for the cluster to get or update the routing control state to redirect traffic.   You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Application Recovery Controller.  To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide. Learn more about working with routing controls in the following topics in the Amazon Route 53 Application Recovery Controller Developer Guide:     Viewing and updating routing control states     Working with routing controls overall   
   */
  getRoutingControlState(callback?: (err: AWSError, data: Route53RecoveryCluster.Types.GetRoutingControlStateResponse) => void): Request<Route53RecoveryCluster.Types.GetRoutingControlStateResponse, AWSError>;
  /**
   * Set the state of the routing control to reroute traffic. You can set the value to be On or Off. When the state is On, traffic flows to a cell. When it's Off, traffic does not flow. With Application Recovery Controller, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application. The SafetyRulesToOverride property enables you override one or more safety rules and update routing control states. For more information, see  Override safety rules to reroute traffic in the Amazon Route 53 Application Recovery Controller Developer Guide.  You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Application Recovery Controller.  To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide.     Viewing and updating routing control states     Working with routing controls overall   
   */
  updateRoutingControlState(params: Route53RecoveryCluster.Types.UpdateRoutingControlStateRequest, callback?: (err: AWSError, data: Route53RecoveryCluster.Types.UpdateRoutingControlStateResponse) => void): Request<Route53RecoveryCluster.Types.UpdateRoutingControlStateResponse, AWSError>;
  /**
   * Set the state of the routing control to reroute traffic. You can set the value to be On or Off. When the state is On, traffic flows to a cell. When it's Off, traffic does not flow. With Application Recovery Controller, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application. The SafetyRulesToOverride property enables you override one or more safety rules and update routing control states. For more information, see  Override safety rules to reroute traffic in the Amazon Route 53 Application Recovery Controller Developer Guide.  You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Application Recovery Controller.  To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide.     Viewing and updating routing control states     Working with routing controls overall   
   */
  updateRoutingControlState(callback?: (err: AWSError, data: Route53RecoveryCluster.Types.UpdateRoutingControlStateResponse) => void): Request<Route53RecoveryCluster.Types.UpdateRoutingControlStateResponse, AWSError>;
  /**
   * Set multiple routing control states. You can set the value for each state to be On or Off. When the state is On, traffic flows to a cell. When it's Off, traffic does not flow. With Application Recovery Controller, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application. The SafetyRulesToOverride property enables you override one or more safety rules and update routing control states. For more information, see  Override safety rules to reroute traffic in the Amazon Route 53 Application Recovery Controller Developer Guide.  You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Application Recovery Controller.  To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide.     Viewing and updating routing control states     Working with routing controls overall   
   */
  updateRoutingControlStates(params: Route53RecoveryCluster.Types.UpdateRoutingControlStatesRequest, callback?: (err: AWSError, data: Route53RecoveryCluster.Types.UpdateRoutingControlStatesResponse) => void): Request<Route53RecoveryCluster.Types.UpdateRoutingControlStatesResponse, AWSError>;
  /**
   * Set multiple routing control states. You can set the value for each state to be On or Off. When the state is On, traffic flows to a cell. When it's Off, traffic does not flow. With Application Recovery Controller, you can add safety rules for routing controls, which are safeguards for routing control state updates that help prevent unexpected outcomes, like fail open traffic routing. However, there are scenarios when you might want to bypass the routing control safeguards that are enforced with safety rules that you've configured. For example, you might want to fail over quickly for disaster recovery, and one or more safety rules might be unexpectedly preventing you from updating a routing control state to reroute traffic. In a "break glass" scenario like this, you can override one or more safety rules to change a routing control state and fail over your application. The SafetyRulesToOverride property enables you override one or more safety rules and update routing control states. For more information, see  Override safety rules to reroute traffic in the Amazon Route 53 Application Recovery Controller Developer Guide.  You must specify Regional endpoints when you work with API cluster operations to get or update routing control states in Application Recovery Controller.  To see a code example for getting a routing control state, including accessing Regional cluster endpoints in sequence, see API examples in the Amazon Route 53 Application Recovery Controller Developer Guide.     Viewing and updating routing control states     Working with routing controls overall   
   */
  updateRoutingControlStates(callback?: (err: AWSError, data: Route53RecoveryCluster.Types.UpdateRoutingControlStatesResponse) => void): Request<Route53RecoveryCluster.Types.UpdateRoutingControlStatesResponse, AWSError>;
}
declare namespace Route53RecoveryCluster {
  export type Arn = string;
  export type Arns = Arn[];
  export interface GetRoutingControlStateRequest {
    /**
     * The Amazon Resource Number (ARN) for the routing control that you want to get the state for.
     */
    RoutingControlArn: Arn;
  }
  export interface GetRoutingControlStateResponse {
    /**
     * The Amazon Resource Number (ARN) of the response.
     */
    RoutingControlArn: Arn;
    /**
     * The state of the routing control.
     */
    RoutingControlState: RoutingControlState;
  }
  export type RoutingControlState = "On"|"Off"|string;
  export type UpdateRoutingControlStateEntries = UpdateRoutingControlStateEntry[];
  export interface UpdateRoutingControlStateEntry {
    /**
     * The Amazon Resource Number (ARN) for a routing control state entry.
     */
    RoutingControlArn: Arn;
    /**
     * The routing control state in a set of routing control state entries.
     */
    RoutingControlState: RoutingControlState;
  }
  export interface UpdateRoutingControlStateRequest {
    /**
     * The Amazon Resource Number (ARN) for the routing control that you want to update the state for.
     */
    RoutingControlArn: Arn;
    /**
     * The state of the routing control. You can set the value to be On or Off.
     */
    RoutingControlState: RoutingControlState;
    /**
     * The Amazon Resource Numbers (ARNs) for the safety rules that you want to override when you're updating the state of a routing control. You can override one safety rule or multiple safety rules by including one or more ARNs, separated by commas. For more information, see  Override safety rules to reroute traffic in the Amazon Route 53 Application Recovery Controller Developer Guide.
     */
    SafetyRulesToOverride?: Arns;
  }
  export interface UpdateRoutingControlStateResponse {
  }
  export interface UpdateRoutingControlStatesRequest {
    /**
     * A set of routing control entries that you want to update.
     */
    UpdateRoutingControlStateEntries: UpdateRoutingControlStateEntries;
    /**
     * The Amazon Resource Numbers (ARNs) for the safety rules that you want to override when you're updating routing control states. You can override one safety rule or multiple safety rules by including one or more ARNs, separated by commas. For more information, see  Override safety rules to reroute traffic in the Amazon Route 53 Application Recovery Controller Developer Guide.
     */
    SafetyRulesToOverride?: Arns;
  }
  export interface UpdateRoutingControlStatesResponse {
  }
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-12-02"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the Route53RecoveryCluster client.
   */
  export import Types = Route53RecoveryCluster;
}
export = Route53RecoveryCluster;
