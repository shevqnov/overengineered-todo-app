import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../store'
import { View } from '../store/visibilityFilter/types'
import { setVisibility } from '../store/visibilityFilter/actions'

const filtersList = [
  {title: 'All', key: View.All },
  {title: 'Completed', key: View.Completed},
  {title: 'Uncompleted', key: View.Uncompleted}
]

const VisibilityFilter = () => {
  const currentView = useSelector<AppState, View>(state => state.visibilityFilter)
  const dispatch  = useDispatch()

  const onChange = React.useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setVisibility(Number(event.currentTarget.value) as View))
  }, [dispatch])

  return (
    <div>
      <h4>Choose todos visibility</h4>
      <select onChange={onChange} value={currentView}>
        {filtersList.map(view => (
          <option key={view.key} value={view.key}>{view.title}</option>
        ))}
      </select>
    </div>
  )
}

export default VisibilityFilter