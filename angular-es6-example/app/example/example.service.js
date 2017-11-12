function exampleService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default exampleService;
