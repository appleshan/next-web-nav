"use client"

import Link from "next/link"

import { HoverEffect } from "@/components/ui/card-hover-effect"
import { useConfigStore } from "@/stores"

export function LinkContent() {
  const { categories } = useConfigStore()

  return (
    <div className="w-full pb-96 pt-4">
      <div id="main" role="main" className="mx-auto w-full px-4 md:px-6">
        {categories.map((category, index) => {
          return (
            <div id={String(index)} key={index} className="mb-12">
              <div className="my-4">
                <h2 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">{category.title}</h2>
              </div>
              <HoverEffect
                items={category.items.map(({ title, desc, link, icon }) => ({
                  link,
                  title,
                  description: desc,
                  icon
                }))}
              />
            </div>
          )
        })}
        <div id = "contact" className="mb-12">
          <div className="my-4">
            <h2 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">联系我</h2>
          </div>
          <div>
            你可以通过
            <Link href="mailto:39454075@qq.com" target="_blank" rel="noreferrer">
              <span className="px-3 underline decoration-wavy hover:text-purple-500">Email</span>
            </Link>
            联系我
          </div>
        </div>
      </div>
    </div>
  )
}
