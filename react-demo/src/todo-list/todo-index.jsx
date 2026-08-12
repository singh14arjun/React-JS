import { CiEdit } from "react-icons/ci";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
const TodoHome = lazy(() => import("./Todo-home"));
const TodoLogin = lazy(() => import("./todo-login"));
const TodoRegister = lazy(() => import("./todo-register"));
const TodoDashboard = lazy(() => import("./todo-dashboard"));
const TodoNopage = lazy(() => import("./todo-nopage"));
const TodoAddTask = lazy(() => import("./todo-addtask"));
const TodoEdit = lazy(() => import("./todo-edit"));
const TodoDelete = lazy(() => import("./todo-delete"));
const TodoAllTask = lazy(() => import("./todo-allTask"));
const TodoProfile = lazy(() => import("./todo-profile"));
import { lazy, Suspense } from "react";


const TodoIndex = () => {
    // const navigate = useNavigate();
    return (
        <div>
            <BrowserRouter>
                <header className="bg-gray-200 flex justify-between p-2 items-center">
                    <div className="bg-gray-300 flex items-center gap-2 p-2 rounded-lg">
                        <CiEdit className="text-2xl bg-gray-900/10 text-white p-1 rounded-lg" />
                        <p className="text-xl font-bold">Task Manager</p></div>

                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex gap-2">
                                <p className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer font-semibold">Features</p>
                                <p className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer font-semibold">Pricing</p>
                                <p className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer font-semibold">About</p>
                                <p className="hover:bg-gray-300 p-2 rounded-lg cursor-pointer font-semibold">Contact</p>
                            </div>
                            <Link to="/" className="bg-blue-600 p-2 text-white rounded-lg hover:bg-blue-700 cursor-pointer">Get Started</Link>

                        </div>
                    </div>
                </header>
                <section>
                    <Suspense
                        fallback=
                        {
                            <div className="flex items-center justify-center h-screen">
                                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
                            </div>
                        }>
                        <Routes>
                            <Route path="/" element={<TodoHome />} />
                            <Route path="login" element={<TodoLogin />} />
                            <Route path="register" element={<TodoRegister />} />
                            <Route path="dashboard" element={<TodoDashboard />} >
                                <Route index element={<TodoAllTask />} />
                                <Route path="add" element={<TodoAddTask />} />
                                <Route path="edit/:id" element={<TodoEdit />} />
                                <Route path="delete/:id" element={<TodoDelete />} />
                                <Route path="profile" element={<TodoProfile />} />
                            </Route>
                            <Route path="*" element={<TodoNopage />} />
                        </Routes>
                    </Suspense>
                </section>
            </BrowserRouter>
        </div>
    );
};

export default TodoIndex;