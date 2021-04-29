import React, {useMemo} from 'react'
import {FormBuilderInput} from 'part:@sanity/form-builder'
import PatchEvent, {
  setIfMissing,
  set
} from 'part:@sanity/form-builder/patch-event'
import Fieldset from 'part:@sanity/components/fieldsets/default'
import Select from 'part:@sanity/components/selects/default'

interface FieldTuple {
  title: string;
  field: any;
}

/**
 * Discriminated Unions allow a single field to hold two different distinct
 * types by utilizing the arrays with more than one type defined in the `of`
 * property.
 *
 * The resulting array is an array that will only hold at most one item that can
 * be of two or more types.
 */
function DiscriminatedUnion ({
  level,
  type,
  value,
  onChange,
  markers,
  ...restOfProps
}: any) {
  const items = useMemo(() => {
    const types: any[] = type.of

    const tuples = types.map((field) => {
      const tuple: FieldTuple = {field, title: field.title}

      return tuple
    })

    tuples.unshift({title: '', field: null})

    return tuples
  }, [type])

  if (!items.length) {
    throw new Error('At least one type is required in a DiscriminatedUnion')
  }

  const valueType = value?.[0]?._type
  const current = items.find((i) => i.field?.name === valueType)
  const currentField = current?.field

  const handleFormBuilderChange = (patchEvent) => {
    if (!currentField) {
      return
    }

    onChange(
      patchEvent.prefixAll({_key: 'discriminated-union'}).prepend(
        setIfMissing([
          {
            _type: currentField.name,
            _key: 'discriminated-union'
          }
        ])
      )
    )
  }

  const handleSelectChange = ({field}: FieldTuple) => {
    onChange(
      PatchEvent.from(
        field
          ? set(
            // when the select changes, it clears the
            // current value and resets the field type
            [{_type: field.name, _key: 'discriminated-union'}]
          )
          : set(undefined)
      )
    )
  }

  return (
    <Fieldset
      description={type.description}
      legend={type.title}
      level={level - 1}
    >
      <Select items={items} value={current} onChange={handleSelectChange} />

      {currentField && (
        <FormBuilderInput
          {...restOfProps}
          key={currentField.name}
          level={level + 1}
          markers={markers.map((marker) =>
            marker.path?.[0]?._key === 'discriminated-union'
              ? {...marker, path: marker.path.slice(1)}
              : marker
          )}
          type={currentField}
          value={value?.[0]}
          onChange={handleFormBuilderChange}
        />
      )}
    </Fieldset>
  )
}

export default DiscriminatedUnion
