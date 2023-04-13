import { NextPage } from "next"
import { AppProps } from "next/app"

export type TypeRoles = {
  isOnlyUser?: boolean
}

export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

export type TypeComponentAuthFields = { Component: TypeRoles }

export type TypeApp = AppProps & TypeComponentAuthFields
