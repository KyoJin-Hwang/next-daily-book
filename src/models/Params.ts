/**
 * 페이지 파라미터를 나타내는 제네릭 인터페이스입니다.
 *
 * 이 인터페이스는 다양한 타입의 파라미터를 처리할 수 있도록 설계.
 * `params`는 타입 `T`에 해당하는 데이터를 포함.
 *
 * @template T - `params`의 타입을 지정하는 제네릭 타입.
 *
 * @example
 * // 숫자형 파라미터를 사용하는 예시
 *
 * interface IDProp {
 *  id:string;
 * }
 *
 * const page = ({ params: { id } }: PageParams<IDProp>) => {
 *   return <><>
 * };
 *
 * @example
 * // 문자열형 파라미터를 사용하는 예시
 * interface SlugProp {
 *  id:string;
 * }
 *
 * const page = ({ params: { slug } }: PageParams<SlugProp>) => {
 *   return <><>
 * };
 */
export interface PageParams<T> {
  params: T;
}
