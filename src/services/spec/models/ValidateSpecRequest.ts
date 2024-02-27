import { DiagnosticRules } from './DiagnosticRules';


type SpecFileExtension = ("json" | "yaml" | "yml")
type Ignore = DiagnosticRules

export interface ValidateSpecRequest {
specFileExtension: SpecFileExtension
spec: import('fs').ReadStream | Buffer | File
ignore?: Ignore
}
