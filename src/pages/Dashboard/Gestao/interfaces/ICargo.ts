export default interface ICargo{
    listCargo: Array<{label: string, value: string}>;
    cargoSelected: {label: string, value: string};
    cargoInput: {name: string, cor: string};
}