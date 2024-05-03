import React, { useState, useEffect, useRef } from 'react'
import cl from './MySelect.module.scss'
import { type SelectProps } from '@/@types/typesComponents'
import { type SortType } from '@/@types/types'

const MySelect: React.FC<SelectProps> = ({ options, onChange, defaultValue, defaultName, value }) => {
    const [name, setName] = useState<string>('')
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: KeyboardEvent | MouseEvent) => {
            if (((ref.current != null) && !ref.current.contains(event.target as Node)) ?? (event instanceof KeyboardEvent && event.key === 'Escape')) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
            document.removeEventListener('keydown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        const selectedOption = options.find(option => option.value === value)
        if (selectedOption != null) {
            setName(selectedOption.name)
        } else {
            setName(defaultName)
        }
    }, [value, options, defaultName])

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleSelectOption = (optionValue: SortType, optionName: string) => {
        if (optionValue !== value) {
            onChange(optionValue)
            setIsOpen(false)
        }
    }

    return (
        <div className={cl.mySelect} ref={ref}>
            Сортировка:
            <div className={isOpen ? cl.openOptions : cl.selectedOption} onClick={handleToggle}>
                {name || defaultName}
            </div>
            {isOpen && (
                <div className={cl.options}>
                    <div className={cl.option} onClick={() => { handleSelectOption(defaultValue, defaultName) }}>
                        {defaultName}
                    </div>
                    {options.map(option => (
                        <div key={option.value} className={cl.option}
                            onClick={() => { handleSelectOption(option.value, option.name) }}>
                            {option.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default MySelect
