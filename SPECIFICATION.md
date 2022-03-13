# openGRO Software Requirement Specification

## 1. Introduction
#### 1.1 Purpose

The purpose of openGRO is to make managing an agricultural operation more accessible. This is targeted to cannabis specifically, but it should be applicable to other crops.  It will allow growers to use relatively low cost sensors and output devices to have more control over their operation.  

#### 1.2 Intended Audience

Small scale growers who like to tinker.  This system being fully open source helps growers to avoid vendor lock in, and allow them to implement custom solutions if the capabilities don't exactly match their requirements.

#### 1.3 Intended Use

This software will be used to monitor grow room data from sensors to help growers gain insight into their rooms.  It also allows users to set control device set points, and to set up alerts to be notified if conditions are outside preset limits.

#### 1.4 Scope

This pioece of the openGRO ecosystem consists of a web application, a database for storing settings and telemetry, and an MQTT interface for communicating with control devices and sensors.

#### 1.5 Definitions and Acronyms
SSOT = Single Source of Truth

## 2. Overall Description


#### 2.1 User Needs


#### 2.2 Assumptions and Dependencies
* The database will be considrered the SSOT for configuration data.

## 3. System Features and Requirements


#### 3.1 Functional Requirements

* The web application must have authentication.
    * Use Auth0 for authentication?
* The user can view the latest environmental data.
* The user can view historical environmental data from a chart.
* The user can set configuration parameters from a dashboard.
    * A/C Setpoint, Deadband, and Offset
    * Dehumidifier Setpoint, Deadband, and Offset
    * CO2 Supplementation Setpoint, Deadband, Offset, and schedule
    * Lighting Output Setpoint and schedule
    * Off/Auto/Manual setting for all outputs
* The user should be able to configure output devices 

#### 3.2 External Interface Requirements

#### 3.3 System Features

#### 3.4 Nonfunctional Requirements

