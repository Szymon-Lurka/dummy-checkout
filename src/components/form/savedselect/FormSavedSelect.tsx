import FormSelect from "../select/FormSelect";
import { StyledLabel, StyledWrapper } from './FormSavedSelect.styles.tsx';


const FormSavedSelect = ({ options, onChange, value, label }: { options: { label: string, value: string }[], label: string, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, value: string }) => {
    return (
        <StyledWrapper>
            <StyledLabel>
                {label}
            </StyledLabel>
            <FormSelect onChange={onChange} value={value} style={{ flexBasis: '50%' }}>
                <option value="">{label}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </FormSelect>
        </StyledWrapper>
    )
}

export default FormSavedSelect;
